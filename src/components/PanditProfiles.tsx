import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award, Clock, MapPin, Phone } from "lucide-react";

const PanditProfiles = () => {
  const pandits = [
    {
      id: 1,
      name: "Pandit Rajesh Sharma",
      image: "/api/placeholder/100/100",
      experience: "25+ years",
      specialization: ["Vedic Rituals", "Homam", "Marriage Ceremonies"],
      languages: ["Hindi", "Sanskrit", "English"],
      location: "Delhi",
      rating: 4.9,
      reviews: 127,
      phone: "+91 98765 43210",
      description: "Expert in Vedic rituals with deep knowledge of ancient scriptures. Specializes in complex homams and marriage ceremonies.",
      certifications: ["Vedic Studies", "Sanskrit Literature", "Ritual Performance"],
      availability: "Available"
    },
    {
      id: 2,
      name: "Pandit Lakshmi Narayan",
      image: "/api/placeholder/100/100",
      experience: "30+ years",
      specialization: ["Festival Poojas", "Daily Rituals", "Temple Services"],
      languages: ["Hindi", "Tamil", "Sanskrit"],
      location: "Chennai",
      rating: 4.8,
      reviews: 89,
      phone: "+91 98765 43211",
      description: "Renowned for festival poojas and temple services. Known for his melodious chanting and detailed explanations.",
      certifications: ["Temple Priest Training", "Festival Rituals", "Classical Music"],
      availability: "Available"
    },
    {
      id: 3,
      name: "Pandit Suresh Joshi",
      image: "/api/placeholder/100/100",
      experience: "20+ years",
      specialization: ["Birth Ceremonies", "Childhood Rituals", "Educational Poojas"],
      languages: ["Hindi", "Gujarati", "English"],
      location: "Mumbai",
      rating: 4.7,
      reviews: 156,
      phone: "+91 98765 43212",
      description: "Specializes in birth and childhood ceremonies. Patient and gentle approach with families and children.",
      certifications: ["Childhood Rituals", "Educational Ceremonies", "Family Counseling"],
      availability: "Available"
    },
    {
      id: 4,
      name: "Pandit Venkatesh Iyer",
      image: "/api/placeholder/100/100",
      experience: "35+ years",
      specialization: ["South Indian Rituals", "Temple Poojas", "Classical Chanting"],
      languages: ["Tamil", "Sanskrit", "English", "Kannada"],
      location: "Bangalore",
      rating: 4.9,
      reviews: 203,
      phone: "+91 98765 43213",
      description: "Master of South Indian traditions with expertise in classical Sanskrit chanting and temple rituals.",
      certifications: ["South Indian Traditions", "Classical Sanskrit", "Temple Architecture"],
      availability: "Available"
    },
    {
      id: 5,
      name: "Pandit Anil Kumar",
      image: "/api/placeholder/100/100",
      experience: "18+ years",
      specialization: ["Business Poojas", "Vastu Shanti", "Special Occasions"],
      languages: ["Hindi", "English", "Punjabi"],
      location: "Pune",
      rating: 4.6,
      reviews: 94,
      phone: "+91 98765 43214",
      description: "Expert in business and special occasion poojas. Known for practical approach and modern interpretations.",
      certifications: ["Business Rituals", "Vastu Shastra", "Modern Applications"],
      availability: "Available"
    },
    {
      id: 6,
      name: "Pandit Radha Krishnan",
      image: "/api/placeholder/100/100",
      experience: "28+ years",
      specialization: ["Spiritual Guidance", "Meditation", "Philosophy"],
      languages: ["Hindi", "Sanskrit", "English", "Telugu"],
      location: "Hyderabad",
      rating: 4.8,
      reviews: 78,
      phone: "+91 98765 43215",
      description: "Spiritual guide and philosopher who combines traditional rituals with spiritual wisdom and meditation practices.",
      certifications: ["Spiritual Philosophy", "Meditation Techniques", "Vedic Philosophy"],
      availability: "Available"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon mb-4">Our Expert Pandits</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our team of experienced and knowledgeable pandits, each specializing in different aspects of Hindu rituals and ceremonies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pandits.map((pandit) => (
          <Card key={pandit.id} className="divine-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={pandit.image} alt={pandit.name} />
                  <AvatarFallback className="bg-gold/10 text-maroon text-lg font-semibold">
                    {pandit.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl text-maroon">{pandit.name}</CardTitle>
              <CardDescription className="flex items-center justify-center">
                <Award className="h-4 w-4 mr-1 text-gold" />
                {pandit.experience} Experience
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-gold mr-1" />
                  <span className="font-medium">{pandit.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({pandit.reviews} reviews)</span>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {pandit.availability}
                </Badge>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {pandit.location}
              </div>

              <div>
                <h4 className="font-medium text-maroon mb-2">Specializations:</h4>
                <div className="flex flex-wrap gap-1">
                  {pandit.specialization.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-maroon mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-1">
                  {pandit.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {pandit.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  Contact
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-saffron to-gold text-white">
                  Book Service
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="divine-border bg-gold/5">
          <CardContent className="py-8">
            <h3 className="text-xl font-semibold text-maroon mb-4">Need a Specific Pandit?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the right pandit for your needs? We have a network of experienced pandits across India.
            </p>
            <Button className="bg-gradient-to-r from-saffron to-gold text-white">
              Request Custom Pandit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PanditProfiles;
