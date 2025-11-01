import * as React from 'react';
import { Moon, Sun, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MonthlyTarpanamServices = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon mb-4">Monthly Tarpanam Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Monthly tarpanam ceremonies are performed on Amavasya (new moon) and Purnima (full moon) days 
          to honor ancestors and seek their blessings for peace and prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Amavasya Tarpanam */}
        <Card className="divine-border">
          <CardHeader>
            <div className="flex items-center">
              <Moon className="h-8 w-8 text-gold mr-3" />
              <div>
                <CardTitle className="text-maroon">Amavasya Tarpanam</CardTitle>
                <CardDescription>New Moon Day Ancestral Worship</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-gold border-gold">
                Monthly Service
              </Badge>
              <Badge variant="secondary">
                New Moon Day
              </Badge>
            </div>
            
            <div>
              <h4 className="font-medium text-maroon mb-2">Significance</h4>
              <p className="text-gray-600 text-sm">
                Amavasya is considered the most auspicious day for ancestral worship. It is believed that 
                ancestors visit their descendants on this day, and tarpanam helps satisfy their souls and 
                seek their blessings.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-maroon mb-2">What We Provide</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete tarpanam setup with all required materials</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Experienced pandit for proper ritual performance</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ancestral name chanting and prayers</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Water offerings (Tarpana) to ancestors</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pinda offering for departed souls</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Blessings and peace prayers for the family</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button className="w-full pooja-button spiritual-glow">
                Book Amavasya Tarpanam
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Purnima Tarpanam */}
        <Card className="divine-border">
          <CardHeader>
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-gold mr-3" />
              <div>
                <CardTitle className="text-maroon">Purnima Tarpanam</CardTitle>
                <CardDescription>Full Moon Day Ancestral Worship</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-gold border-gold">
                Monthly Service
              </Badge>
              <Badge variant="secondary">
                Full Moon Day
              </Badge>
            </div>
            
            <div>
              <h4 className="font-medium text-maroon mb-2">Significance</h4>
              <p className="text-gray-600 text-sm">
                Purnima tarpanam is performed to honor ancestors and seek their blessings for prosperity 
                and success. The full moon day is considered auspicious for spiritual practices and 
                ancestral worship.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-maroon mb-2">What We Provide</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete tarpanam setup with sacred materials</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Knowledgeable pandit for authentic rituals</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ancestral lineage prayers and mantras</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sacred water offerings with sesame seeds</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rice ball offerings (Pinda) for ancestors</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prosperity and success prayers</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button className="w-full pooja-button spiritual-glow">
                Book Purnima Tarpanam
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <Card className="divine-border bg-gold/5">
        <CardHeader>
          <CardTitle className="text-maroon flex items-center">
            <Calendar className="h-6 w-6 text-gold mr-2" />
            Monthly Tarpanam Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-maroon mb-3">Amavasya Tarpanam</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performed on every new moon day</li>
                <li>• Most important day for ancestral worship</li>
                <li>• Helps satisfy departed souls</li>
                <li>• Removes ancestral curses and obstacles</li>
                <li>• Brings peace and prosperity to the family</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-maroon mb-3">Purnima Tarpanam</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performed on every full moon day</li>
                <li>• Auspicious for spiritual practices</li>
                <li>• Seeks blessings for success and prosperity</li>
                <li>• Honors ancestors and seeks their guidance</li>
                <li>• Strengthens family bonds and traditions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border border-gold/20">
            <h4 className="font-medium text-maroon mb-2">Monthly Subscription Available</h4>
            <p className="text-sm text-gray-600 mb-3">
              Subscribe to our monthly tarpanam service to ensure regular ancestral worship 
              without missing any important dates. We'll remind you and arrange everything.
            </p>
            <Button variant="outline" className="w-full pooja-button">
              Subscribe to Monthly Tarpanam
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyTarpanamServices;
