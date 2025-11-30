
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const poojaTypes = [
  // Daily Poojas
  { value: "sandhyavandanam", label: "Sandhyavandanam", category: "Daily" },
  { value: "surya_namaskar", label: "Surya Namaskar", category: "Daily" },
  { value: "evening_aarti", label: "Evening Aarti", category: "Daily" },
  { value: "tulsi_pooja", label: "Tulsi Pooja", category: "Daily" },
  { value: "gayatri_mantra", label: "Gayatri Mantra Japa", category: "Daily" },
  { value: "hanuman_chalisa", label: "Hanuman Chalisa", category: "Daily" },
  
  // Festival Poojas
  { value: "diwali_pooja", label: "Diwali Pooja", category: "Festival" },
  { value: "navratri_pooja", label: "Navratri Pooja", category: "Festival" },
  { value: "ganesh_chaturthi", label: "Ganesh Chaturthi", category: "Festival" },
  { value: "durga_puja", label: "Durga Puja", category: "Festival" },
  { value: "krishna_janmashtami", label: "Krishna Janmashtami", category: "Festival" },
  { value: "rama_navami", label: "Rama Navami", category: "Festival" },
  { value: "shivaratri_pooja", label: "Shivaratri Pooja", category: "Festival" },
  { value: "karva_chauth", label: "Karva Chauth", category: "Festival" },
  
  // Special Occasions
  { value: "griha_pravesh", label: "Griha Pravesh", category: "Special" },
  { value: "vastu_shanti", label: "Vastu Shanti", category: "Special" },
  { value: "vehicle_pooja", label: "Vehicle Pooja", category: "Special" },
  { value: "business_inauguration", label: "Business Inauguration", category: "Special" },
  { value: "satyanarayana_pooja", label: "Satyanarayana Pooja", category: "Special" },
  { value: "havan_homam", label: "Havan/Homam", category: "Special" },
  { value: "chandi_path", label: "Chandi Path", category: "Special" },
  { value: "sundarkand_path", label: "Sundarkand Path", category: "Special" },
  
  // Temple Services
  { value: "special_darshan", label: "Special Darshan", category: "Temple" },
  { value: "prasadam_distribution", label: "Prasadam Distribution", category: "Temple" },
  { value: "abhishekam", label: "Abhishekam", category: "Temple" },
  { value: "archana", label: "Archana", category: "Temple" },
  { value: "seva_arrangements", label: "Seva Arrangements", category: "Temple" },
  { value: "pilgrimage_planning", label: "Pilgrimage Planning", category: "Temple" },
  
  // Traditional Homams
  { value: "ganapathi_homam", label: "Ganapathi Homam", category: "Traditional" },
  { value: "navagraha_homam", label: "Navagraha Homam", category: "Traditional" },
  { value: "rudrabhishekam", label: "Rudrabhishekam", category: "Traditional" },
  { value: "lakshmi_kubera_pooja", label: "Lakshmi Kubera Pooja", category: "Traditional" },
  { value: "aksharabhyasam", label: "Aksharabhyasam (Vidyarambham)", category: "Traditional" },
  
  // Monthly Tarpanam
  { value: "amavasya_tarpanam", label: "Amavasya Tarpanam", category: "Monthly Tarpanam" },
  { value: "purnima_tarpanam", label: "Purnima Tarpanam", category: "Monthly Tarpanam" },
  { value: "monthly_tarpanam_subscription", label: "Monthly Tarpanam Subscription", category: "Monthly Tarpanam" },
];

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "01:00 PM", "02:00 PM", "04:00 PM", 
  "05:00 PM", "06:00 PM", "07:00 PM"
];

const PoojaBookingForm: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedPooja, setSelectedPooja] = useState<string>("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form (simplified)
    if (!date || !selectedTime || !selectedPooja) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Would send to backend in a real app
    toast({
      title: "Booking request received!",
      description: `We'll contact you shortly to confirm your ${selectedPooja} booking.`,
    });
    
    // Reset form
    setDate(undefined);
    setSelectedTime("");
    setSelectedPooja("");
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="max-w-md mx-auto divine-border bg-white relative">
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-saffron"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-saffron"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-saffron"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-saffron"></div>
      
      <h3 className="text-xl font-medium text-center mb-6 text-maroon">Book Your Pooja Service</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" placeholder="Full Name" required className="border-saffron/20 focus-visible:ring-saffron/30" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="email@example.com" required className="border-saffron/20 focus-visible:ring-saffron/30" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" required className="border-saffron/20 focus-visible:ring-saffron/30" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="pooja-type">Select Pooja Service</Label>
          <Select value={selectedPooja} onValueChange={setSelectedPooja}>
            <SelectTrigger className="border-saffron/20 focus:ring-saffron/30">
              <SelectValue placeholder="Select a pooja service" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {['Daily', 'Festival', 'Special', 'Temple', 'Traditional', 'Monthly Tarpanam'].map((category) => (
                <div key={category}>
                  <div className="px-2 py-1.5 text-sm font-semibold text-maroon bg-saffron/10">
                    {category} Poojas
                  </div>
                  {poojaTypes
                    .filter(pooja => pooja.category === category)
                    .map((pooja) => (
                      <SelectItem key={pooja.value} value={pooja.value} className="pl-6">
                        {pooja.label}
                      </SelectItem>
                    ))}
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-saffron/20 justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-saffron" />
                {date ? format(date, "PPP") : <span className="text-muted-foreground">Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label>Select Time Slot</Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger className="border-saffron/20 focus:ring-saffron/30">
              <SelectValue placeholder="Select time">
                {selectedTime || (
                  <span className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-saffron" />
                    <span>Choose time</span>
                  </span>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter complete address for the pooja service" className="border-saffron/20 focus-visible:ring-saffron/30" rows={3} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="requirements">Special Requirements (Optional)</Label>
          <Textarea id="requirements" placeholder="Any special requests or requirements" className="border-saffron/20 focus-visible:ring-saffron/30" rows={2} />
        </div>
        
        <Button type="submit" className="w-full pooja-button spiritual-glow">
          Request Booking
        </Button>
      </form>
    </div>
  );
};

export default PoojaBookingForm;
