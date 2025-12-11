
import * as React from 'react';
import PoojaBookingForm from '@/components/PoojaBookingForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';

const HomePoojaServices = () => {
  const poojaCategories = [
    {
      id: "daily",
      title: "Daily Poojas",
      icon: "🌅",
      poojas: [
        { name: "Sandhyavandanam", description: "Daily prayers at dawn, noon, and dusk" },
        { name: "Surya Namaskar", description: "Sun worship for health and vitality" },
        { name: "Evening Aarti", description: "Sacred lamp ceremony for divine blessings" },
        { name: "Tulsi Pooja", description: "Worship of sacred basil plant" },
        { name: "Gayatri Mantra Japa", description: "Chanting of the most sacred mantra" },
        { name: "Hanuman Chalisa", description: "Devotional prayers to Lord Hanuman" }
      ]
    },
    {
      id: "festival",
      title: "Festival Poojas",
      icon: "🎉",
      poojas: [
        { name: "Diwali Pooja", description: "Festival of lights with Lakshmi worship" },
        { name: "Navratri Pooja", description: "Nine nights of Goddess Durga worship" },
        { name: "Ganesh Chaturthi", description: "Lord Ganesha's birthday celebration" },
        { name: "Durga Puja", description: "Goddess Durga's divine worship" },
        { name: "Krishna Janmashtami", description: "Lord Krishna's birth celebration" },
        { name: "Rama Navami", description: "Lord Rama's birth celebration" },
        { name: "Shivaratri Pooja", description: "Night of Lord Shiva worship" },
        { name: "Karva Chauth", description: "Married women's fast and prayer" }
      ]
    },
    {
      id: "special",
      title: "Special Occasions",
      icon: "🏠",
      poojas: [
        { name: "Griha Pravesh", description: "House warming ceremony for new homes" },
        { name: "Vastu Shanti", description: "Harmonizing home energy and directions" },
        { name: "Vehicle Pooja", description: "Blessing new vehicles for safe journeys" },
        { name: "Business Inauguration", description: "Opening ceremony for new ventures" },
        { name: "Satyanarayana Pooja", description: "Monthly prosperity and peace ritual" },
        { name: "Havan/Homam", description: "Sacred fire ceremony for purification" },
        { name: "Chandi Path", description: "Recitation of Devi Mahatmyam" },
        { name: "Sundarkand Path", description: "Recitation of Hanuman's heroic deeds" }
      ]
    },
    {
      id: "temple",
      title: "Temple Services",
      icon: "🛕",
      poojas: [
        { name: "Special Darshan", description: "Arranged temple visits with priority access" },
        { name: "Prasadam Distribution", description: "Blessed food offerings distribution" },
        { name: "Abhishekam", description: "Sacred bathing of deities with holy substances" },
        { name: "Archana", description: "Personalized deity worship with names" },
        { name: "Seva Arrangements", description: "Special service arrangements at temples" },
        { name: "Pilgrimage Planning", description: "Organized visits to sacred places" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-maroon mb-6">Comprehensive Pooja Services</h2>
        
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
            {poojaCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs lg:text-sm data-[state=active]:bg-saffron/10 data-[state=active]:text-saffron"
              >
                <span className="mr-1">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {poojaCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-medium text-maroon">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.poojas.map((pooja, index) => (
                    <div key={index} className="divine-border">
                      <h4 className="font-medium text-maroon">{pooja.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {pooja.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <Separator className="my-8" />
        
        <div>
          <h3 className="text-xl font-medium text-maroon mb-4">Our Services Include:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              'Experienced & knowledgeable pandits from various traditions',
              'Complete pooja samagri arrangement and delivery',
              'Flexible scheduling with auspicious time calculation',
              'Multiple language options (Hindi, Sanskrit, English)',
              'Detailed explanation of rituals and their significance',
              'Post-ceremony guidance and follow-up support',
              'Customized ceremonies based on family traditions',
              'Digital documentation and certificate provision'
            ].map((service) => (
              <div key={service} className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-saffron/10 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-saffron"></div>
                </div>
                <p className="text-gray-600">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-medium text-maroon mb-6">Book Your Pooja</h3>
        <PoojaBookingForm />
      </div>
    </div>
  );
};

export default HomePoojaServices;
