import * as React from 'react';
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Star } from "lucide-react";
import { format } from "date-fns";

const PoojaCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Sample auspicious dates and festivals (in a real app, this would come from an API)
  const auspiciousDates = [
    {
      date: new Date(2024, 0, 11), // January 11, 2024
      type: "tarpanam",
      title: "Amavasya Tarpanam",
      description: "New moon day - most auspicious for ancestral worship",
      poojas: ["Amavasya Tarpanam", "Ancestral Prayers", "Pinda Offering"]
    },
    {
      date: new Date(2024, 0, 25), // January 25, 2024
      type: "tarpanam",
      title: "Purnima Tarpanam",
      description: "Full moon day - auspicious for prosperity prayers",
      poojas: ["Purnima Tarpanam", "Ancestral Blessings", "Prosperity Prayers"]
    },
    {
      date: new Date(2024, 0, 15), // January 15, 2024
      type: "festival",
      title: "Makar Sankranti",
      description: "Sun's transition into Capricorn, harvest festival",
      poojas: ["Surya Pooja", "Til Pooja", "Kite Flying"]
    },
    {
      date: new Date(2024, 1, 9), // February 9, 2024
      type: "tarpanam",
      title: "Amavasya Tarpanam",
      description: "New moon day - most auspicious for ancestral worship",
      poojas: ["Amavasya Tarpanam", "Ancestral Prayers", "Pinda Offering"]
    },
    {
      date: new Date(2024, 1, 14), // February 14, 2024
      type: "auspicious",
      title: "Maha Shivaratri",
      description: "Great night of Lord Shiva",
      poojas: ["Rudrabhishekam", "Shiva Pooja", "Lingam Abhishekam"]
    },
    {
      date: new Date(2024, 1, 24), // February 24, 2024
      type: "tarpanam",
      title: "Purnima Tarpanam",
      description: "Full moon day - auspicious for prosperity prayers",
      poojas: ["Purnima Tarpanam", "Ancestral Blessings", "Prosperity Prayers"]
    },
    {
      date: new Date(2024, 2, 25), // March 25, 2024
      type: "festival",
      title: "Holi",
      description: "Festival of colors and spring",
      poojas: ["Holika Dahan", "Rangoli Pooja", "Color Festival"]
    },
    {
      date: new Date(2024, 3, 14), // April 14, 2024
      type: "auspicious",
      title: "Rama Navami",
      description: "Lord Rama's birthday",
      poojas: ["Rama Pooja", "Ramayana Path", "Bhajan Session"]
    },
    {
      date: new Date(2024, 4, 10), // May 10, 2024
      type: "auspicious",
      title: "Akshaya Tritiya",
      description: "Most auspicious day for new beginnings",
      poojas: ["Lakshmi Pooja", "Gold Purchase", "New Ventures"]
    },
    {
      date: new Date(2024, 7, 19), // August 19, 2024
      type: "festival",
      title: "Raksha Bandhan",
      description: "Brother-sister bond celebration",
      poojas: ["Rakhi Pooja", "Sister's Blessing", "Family Gathering"]
    },
    {
      date: new Date(2024, 8, 7), // September 7, 2024
      type: "festival",
      title: "Ganesh Chaturthi",
      description: "Lord Ganesha's birthday",
      poojas: ["Ganapathi Pooja", "Modak Offering", "Community Celebration"]
    },
    {
      date: new Date(2024, 9, 2), // October 2, 2024
      type: "festival",
      title: "Navratri Begins",
      description: "Nine nights of Goddess worship",
      poojas: ["Durga Pooja", "Garba", "Dandiya"]
    },
    {
      date: new Date(2024, 9, 31), // October 31, 2024
      type: "festival",
      title: "Diwali",
      description: "Festival of lights",
      poojas: ["Lakshmi Pooja", "Kali Pooja", "Fireworks"]
    }
  ];

  const getDateInfo = (date: Date) => {
    return auspiciousDates.find(item => 
      item.date.toDateString() === date.toDateString()
    );
  };

  const selectedDateInfo = selectedDate ? getDateInfo(selectedDate) : null;

  const getDateClassName = (date: Date) => {
    const dateInfo = getDateInfo(date);
    if (dateInfo) {
      if (dateInfo.type === 'festival') {
        return 'bg-saffron/20 text-maroon font-semibold';
      } else if (dateInfo.type === 'tarpanam') {
        return 'bg-blue-100 text-blue-800 font-semibold';
      } else {
        return 'bg-saffron/20 text-maroon font-medium';
      }
    }
    return '';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="divine-border">
        <CardHeader>
          <CardTitle className="flex items-center text-maroon">
            <CalendarIcon className="mr-2 h-5 w-5 text-saffron" />
            Pooja Calendar
          </CardTitle>
          <CardDescription>
            Select a date to view auspicious occasions and recommended poojas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border-0"
            modifiers={{
              auspicious: auspiciousDates.map(item => item.date)
            }}
            modifiersClassNames={{
              auspicious: getDateClassName
            }}
            components={{
              Day: ({ date, ...props }) => {
                const dateInfo = getDateInfo(date);
                return (
                  <div
                    {...props}
                    className={`relative ${getDateClassName(date)}`}
                  >
                    {date.getDate()}
                    {dateInfo && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-saffron"></div>
                    )}
                  </div>
                );
              }
            }}
          />
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full bg-saffron/20 mr-2"></div>
              <span>Festival Days</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full bg-blue-100 mr-2"></div>
              <span>Tarpanam Days (Amavasya/Purnima)</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full bg-saffron/20 mr-2"></div>
              <span>Auspicious Days</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="divine-border">
        <CardHeader>
          <CardTitle className="flex items-center text-maroon">
            <Star className="mr-2 h-5 w-5 text-saffron" />
            {selectedDateInfo ? selectedDateInfo.title : 'Select a Date'}
          </CardTitle>
          <CardDescription>
            {selectedDateInfo ? selectedDateInfo.description : 'Choose a date from the calendar to see details'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedDateInfo ? (
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(selectedDateInfo.date, "EEEE, MMMM do, yyyy")}
              </div>
              
              <Badge 
                variant={selectedDateInfo.type === 'festival' ? 'default' : selectedDateInfo.type === 'tarpanam' ? 'default' : 'secondary'}
                className={
                  selectedDateInfo.type === 'festival' ? 'bg-saffron text-maroon' : 
                  selectedDateInfo.type === 'tarpanam' ? 'bg-blue-100 text-blue-800' : 
                  'bg-saffron/20 text-maroon'
                }
              >
                {selectedDateInfo.type === 'festival' ? 'Festival' : 
                 selectedDateInfo.type === 'tarpanam' ? 'Tarpanam Day' : 
                 'Auspicious Day'}
              </Badge>
              
              <div>
                <h4 className="font-medium text-maroon mb-2">Recommended Poojas:</h4>
                <div className="space-y-2">
                  {selectedDateInfo.poojas.map((pooja, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-saffron mr-2"></div>
                      <span>{pooja}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-saffron to-softSaffron text-white">
                Book Pooja for this Date
              </Button>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CalendarIcon className="mx-auto h-12 w-12 mb-4 text-gray-300" />
              <p>Select a date from the calendar to view auspicious occasions and recommended poojas</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PoojaCalendar;
