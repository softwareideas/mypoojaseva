import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Star, Heart, Baby, GraduationCap, Users, Home, Mountain, Heart as HeartIcon, BookOpen, Info, Sparkles, Crown, Flower, Sun, Moon } from "lucide-react";
import { format } from "date-fns";

interface LifecycleStage {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  position: { x: number; y: number };
  color: string;
  samskaras: string[];
  recommendedAges: string;
  auspiciousMonths: string[];
}

const LifecycleFlowchart = () => {
  const [selectedStage, setSelectedStage] = useState<LifecycleStage | null>(null);
  const [userBirthDate, setUserBirthDate] = useState<Date | undefined>(undefined);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showAuspiciousDialog, setShowAuspiciousDialog] = useState(false);

  const lifecycleStages: LifecycleStage[] = [
    {
      id: "pre-birth",
      name: "Garbha Samskara",
      description: "Sacred conception and pregnancy rituals - The divine journey begins",
      icon: Flower,
      position: { x: 50, y: 10 },
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
      samskaras: ["Garbhadhana", "Pumsavana", "Seemantonayana"],
      recommendedAges: "Before conception to 8th month",
      auspiciousMonths: ["Chaitra", "Vaishakha", "Jyeshtha", "Ashada"]
    },
    {
      id: "birth",
      name: "Janma Samskara",
      description: "Birth and childhood ceremonies - Welcoming the divine soul",
      icon: Sparkles,
      position: { x: 85, y: 25 },
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      samskaras: ["Jatakarma", "Namkaran", "Nishkramana", "Annaprashana", "Mundan", "Karnavedha", "Vidyarambha"],
      recommendedAges: "Birth to 5 years",
      auspiciousMonths: ["Kartika", "Margashirsha", "Pausha", "Magha"]
    },
    {
      id: "education",
      name: "Vidya Samskara",
      description: "Education and spiritual initiation - The path of learning and wisdom",
      icon: Sun,
      position: { x: 95, y: 50 },
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      samskaras: ["Upanayana", "Vedarambha", "Keshanta", "Samavartana"],
      recommendedAges: "8 to 25 years",
      auspiciousMonths: ["Phalguna", "Chaitra", "Vaishakha", "Jyeshtha"]
    },
    {
      id: "marriage",
      name: "Vivaha Samskara",
      description: "Sacred marriage union - Two souls becoming one in divine love",
      icon: Crown,
      position: { x: 85, y: 75 },
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      samskaras: ["Vivaha"],
      recommendedAges: "20 to 30 years",
      auspiciousMonths: ["Vaishakha", "Jyeshtha", "Ashada", "Shravana"]
    },
    {
      id: "householder",
      name: "Grihastha Ashrama",
      description: "Householder life - Fulfilling duties with spiritual devotion",
      icon: Home,
      position: { x: 50, y: 90 },
      color: "bg-gradient-to-br from-purple-400 to-indigo-500",
      samskaras: ["Daily Poojas", "Festival Celebrations", "Family Rituals"],
      recommendedAges: "25 to 50 years",
      auspiciousMonths: ["All months - especially Shravana", "Kartika", "Margashirsha"]
    },
    {
      id: "retirement",
      name: "Vanaprastha Ashrama",
      description: "Spiritual retirement - Withdrawing from worldly affairs for inner growth",
      icon: Mountain,
      position: { x: 15, y: 75 },
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      samskaras: ["Spiritual Practices", "Pilgrimage", "Teaching"],
      recommendedAges: "50 to 70 years",
      auspiciousMonths: ["Kartika", "Margashirsha", "Pausha", "Magha"]
    },
    {
      id: "death",
      name: "Antyeshti Samskara",
      description: "Final journey - The soul's return to the divine source",
      icon: Moon,
      position: { x: 5, y: 50 },
      color: "bg-gradient-to-br from-slate-400 to-gray-500",
      samskaras: ["Antyeshti", "Shraddha", "Pitru Paksha", "Monthly Tarpanam"],
      recommendedAges: "End of life",
      auspiciousMonths: ["Kartika (Pitru Paksha)", "All Amavasya & Purnima"]
    }
  ];

  const calculateAuspiciousDates = (birthDate: Date, stage: LifecycleStage) => {
    const currentYear = new Date().getFullYear();
    const birthYear = birthDate.getFullYear();
    const age = currentYear - birthYear;
    
    // Calculate next auspicious dates based on stage and current age
    const auspiciousDates = [];
    
    if (stage.id === "birth" && age < 5) {
      // Suggest upcoming auspicious dates for childhood samskaras
      auspiciousDates.push({
        date: new Date(currentYear, 10, 15), // Kartika Purnima
        samskara: "Annaprashana",
        reason: "Auspicious for first solid food ceremony"
      });
    }
    
    if (stage.id === "education" && age >= 8 && age <= 25) {
      auspiciousDates.push({
        date: new Date(currentYear, 2, 25), // Chaitra
        samskara: "Upanayana",
        reason: "Perfect time for sacred thread ceremony"
      });
    }
    
    if (stage.id === "marriage" && age >= 20 && age <= 30) {
      auspiciousDates.push({
        date: new Date(currentYear, 4, 15), // Vaishakha
        samskara: "Vivaha",
        reason: "Most auspicious month for marriage"
      });
    }
    
    return auspiciousDates;
  };

  const getStageByAge = (birthDate: Date) => {
    const age = new Date().getFullYear() - birthDate.getFullYear();
    
    if (age < 5) return lifecycleStages.find(s => s.id === "birth");
    if (age >= 8 && age <= 25) return lifecycleStages.find(s => s.id === "education");
    if (age >= 20 && age <= 30) return lifecycleStages.find(s => s.id === "marriage");
    if (age >= 25 && age <= 50) return lifecycleStages.find(s => s.id === "householder");
    if (age >= 50 && age <= 70) return lifecycleStages.find(s => s.id === "retirement");
    return lifecycleStages.find(s => s.id === "householder");
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon mb-4">Hindu Lifecycle Journey</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Interactive journey through the complete Hindu lifecycle with personalized recommendations and auspicious date suggestions.
        </p>
      </div>

      {/* Birth Date Input */}
      <Card className="divine-border">
        <CardHeader>
          <CardTitle className="flex items-center text-maroon">
            <CalendarIcon className="mr-2 h-5 w-5 text-saffron" />
            Enter Your Birth Date for Personalized Recommendations
          </CardTitle>
          <CardDescription>
            We'll suggest the best dates for your upcoming samskaras and poojas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {userBirthDate ? format(userBirthDate, "PPP") : "Select your birth date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={userBirthDate}
                  onSelect={setUserBirthDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {userBirthDate && (
              <Button 
                onClick={() => setShowAuspiciousDialog(true)}
                className="pooja-button spiritual-glow"
              >
                Get Auspicious Dates
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Flowchart */}
      <Card className="divine-border">
        <CardHeader>
          <CardTitle className="text-maroon flex items-center">
            <Sparkles className="mr-2 h-6 w-6 text-saffron" />
            Click on Any Stage to Explore Your Spiritual Journey
          </CardTitle>
          <CardDescription>Interactive lifecycle with detailed information and booking options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[600px] bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 rounded-lg overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 text-6xl">ॐ</div>
              <div className="absolute top-20 right-20 text-4xl">🕉️</div>
              <div className="absolute bottom-20 left-20 text-4xl">☸️</div>
              <div className="absolute bottom-10 right-10 text-6xl">ॐ</div>
            </div>

            {/* SVG Container for the flowchart */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Connection Lines with Gradient */}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.8" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                  <polygon points="0 0, 12 4, 0 8" fill="#FF8C00" />
                </marker>
              </defs>
              
              {/* Lifecycle Flow Lines */}
              <path d="M 50,15 Q 70,20 85,30" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 90,30 Q 95,40 95,50" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 95,55 Q 90,65 85,75" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 80,80 Q 65,85 50,90" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 45,90 Q 30,85 15,75" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 10,70 Q 5,60 5,50" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 10,45 Q 25,30 50,15" stroke="url(#flowGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Interactive Stage Buttons */}
            {lifecycleStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full ${stage.color} text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 flex items-center justify-center group border-4 border-white/50 hover:border-saffron`}
                style={{
                  left: `${stage.position.x}%`,
                  top: `${stage.position.y}%`
                }}
              >
                <stage.icon className="h-10 w-10 drop-shadow-lg" />
                
                {/* Stage Name Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                  <div className="font-semibold">{stage.name}</div>
                  <div className="text-xs opacity-80 mt-1">{stage.recommendedAges}</div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>
            ))}

            {/* Current Stage Indicator */}
            {userBirthDate && (
              (() => {
                const currentStage = getStageByAge(userBirthDate);
                if (currentStage) {
                  return (
                    <div
                      className="absolute w-24 h-24 rounded-full border-4 border-saffron bg-saffron/30 flex items-center justify-center animate-pulse shadow-2xl"
                      style={{
                        left: `${currentStage.position.x}%`,
                        top: `${currentStage.position.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="text-saffron font-bold text-xs text-center">
                        <div>You Are</div>
                        <div>Here</div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-saffron/20 animate-ping"></div>
                    </div>
                  );
                }
                return null;
              })()
            )}

            {/* Central Om Symbol */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-saffron to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl font-bold">ॐ</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage Details Dialog */}
      <Dialog open={!!selectedStage} onOpenChange={() => setSelectedStage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedStage && (
            <>
              <DialogHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full ${selectedStage.color} flex items-center justify-center shadow-lg`}>
                    <selectedStage.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-maroon">
                      {selectedStage.name}
                    </DialogTitle>
                    <DialogDescription className="text-base mt-2">
                      {selectedStage.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Samskaras Section */}
                <div className="bg-gradient-to-r from-saffron/10 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-maroon mb-3 flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-saffron" />
                    Samskaras in this Stage
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedStage.samskaras.map((samskara, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-saffron rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{samskara}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-maroon mb-2 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-500" />
                      Recommended Ages
                    </h4>
                    <p className="text-gray-700 font-medium">{selectedStage.recommendedAges}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-maroon mb-2 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-green-500" />
                      Auspicious Months
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedStage.auspiciousMonths.map((month, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 border-green-200">
                          {month}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Personalized Recommendations */}
                {userBirthDate && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-maroon mb-3 flex items-center">
                      <Star className="mr-2 h-5 w-5 text-purple-500" />
                      Personalized Recommendations for You
                    </h4>
                    <div className="space-y-3">
                      {calculateAuspiciousDates(userBirthDate, selectedStage).map((date, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-saffron/20 rounded-full flex items-center justify-center">
                              <CalendarIcon className="h-5 w-5 text-saffron" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{date.samskara}</p>
                              <p className="text-sm text-gray-600">{date.reason}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-maroon">{format(date.date, "MMM dd, yyyy")}</p>
                            <Badge className="bg-saffron text-maroon border-saffron">
                              Auspicious
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    onClick={() => setShowBookingDialog(true)}
                    className="pooja-button spiritual-glow flex-1 text-lg py-3"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Book This Service
                  </Button>
                  <Button variant="outline" className="flex-1 text-lg py-3 border-saffron text-saffron hover:bg-saffron hover:text-white">
                    <Info className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book {selectedStage?.name} Service</DialogTitle>
            <DialogDescription>
              Schedule your {selectedStage?.name.toLowerCase()} ceremony with our expert pandits
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Full Name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 98765 43210" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Select date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <Button className="w-full pooja-button spiritual-glow">
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Auspicious Dates Dialog */}
      <Dialog open={showAuspiciousDialog} onOpenChange={setShowAuspiciousDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center text-maroon">
              <Star className="mr-2 h-5 w-5 text-saffron" />
              Your Personalized Auspicious Dates
            </DialogTitle>
            <DialogDescription>
              Based on your birth date, here are the best dates for your upcoming samskaras
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {userBirthDate && (() => {
              const currentStage = getStageByAge(userBirthDate);
              const age = new Date().getFullYear() - userBirthDate.getFullYear();
              
              return (
                <div className="space-y-4">
                  <div className="p-4 bg-saffron/10 rounded-lg">
                    <h4 className="font-medium text-maroon mb-2">Current Stage: {currentStage?.name}</h4>
                    <p className="text-gray-600">Age: {age} years</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-maroon mb-3">Recommended Upcoming Dates:</h4>
                    <div className="space-y-3">
                      {currentStage && calculateAuspiciousDates(userBirthDate, currentStage).map((date, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-saffron/20 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CalendarIcon className="h-5 w-5 text-saffron" />
                            <div>
                              <p className="font-medium">{date.samskara}</p>
                              <p className="text-sm text-gray-600">{date.reason}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{format(date.date, "MMM dd, yyyy")}</p>
                            <Badge className="bg-saffron text-maroon">Auspicious</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full pooja-button spiritual-glow">
                    Book All Recommended Services
                  </Button>
                </div>
              );
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LifecycleFlowchart;
