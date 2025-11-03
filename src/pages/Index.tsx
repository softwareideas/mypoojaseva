import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import PoojaBookingForm from "@/components/PoojaBookingForm";
import PoojaCategoriesCarousel from "@/components/PoojaCategoriesCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Baby,
  Users,
  Home,
  Bell,
  Calendar,
  Info,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleCustomizedQuote = () => {
    const phoneNumber = "918608765113";
    const message =
      "Hello, I'm interested in getting a customized quote for pooja services.\n\nPlease provide me with more details and pricing options.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Life Journey Services */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-maroon mb-3">Hindu Life Cycle Journey Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding you through the sacred traditions and rituals that mark important transitions throughout life's journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Birth & Childhood" 
              description="Ceremonies marking the beginning of life and early development."
              icon={<Baby className="h-6 w-6 text-maroon" />}
              link="/services#birth"
              color="from-maroon to-saffron"
            />
            <ServiceCard 
              title="Marriage" 
              description="Sacred rituals uniting couples in the bond of matrimony."
              icon={<Users className="h-6 w-6 text-gold" />}
              link="/services#marriage"
              color="from-gold to-maroon"
            />
            <ServiceCard 
              title="Grihastha (Householder)" 
              description="Rituals for prosperity, wellbeing and spiritual growth."
              icon={<Home className="h-6 w-6 text-saffron" />}
              link="/services#grihastha"
              color="from-saffron to-gold"
            />
            <ServiceCard 
              title="Spiritual Practices" 
              description="Guidance for spiritual advancement and enlightenment."
              icon={<Bell className="h-6 w-6 text-spiritualGreen" />}
              link="/services#spiritual"
              color="from-spiritualGreen to-gold"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-gradient-to-r from-gold to-saffron text-white">
              <Link to="/services">
                View All Life Cycle Services
              </Link>
            </Button>
          </div>
        </section> */}

        {/* Pooja Categories Carousel */}
        <PoojaCategoriesCarousel />

        {/* Divine Services at Home */}
        {/* <section className="py-16 bg-temple-pattern px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-maroon/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon mb-3">Divine Services at Home</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience authentic rituals and ceremonies in the comfort of your home, performed by experienced pandits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="mb-6 space-y-6">
                  <div className="divine-border bg-white">
                    <h3 className="text-xl font-medium mb-4 text-maroon">Popular Pooja Services</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-gold">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Ganapathi Homam</h4>
                          <p className="text-sm text-gray-600">Invoke Lord Ganesha's blessings to remove obstacles</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-gold">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Satyanarayana Pooja</h4>
                          <p className="text-sm text-gray-600">Ritual dedicated to Lord Vishnu for prosperity</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-gold">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Griha Pravesh</h4>
                          <p className="text-sm text-gray-600">Traditional housewarming ceremony</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-gold">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Navagraha Homam</h4>
                          <p className="text-sm text-gray-600">Appease the nine planets for positive energy</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6 bg-gold/10" />
                    
                    <div>
                      <h4 className="font-medium text-maroon mb-2">Why Choose Our Services:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></div>
                          <span>Experienced and knowledgeable pandits</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></div>
                          <span>Complete samagri (materials) arrangement</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></div>
                          <span>Personalized guidance and explanation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></div>
                          <span>Services available in multiple languages</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-gradient-to-r from-saffron to-gold text-white">
                    <Link to="/services">
                      Explore All Pooja Services
                    </Link>
                  </Button>
                </div>
              </div>
              
              <PoojaBookingForm />
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-16 bg-gold/5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon mb-3">
                Devotee Testimonials
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from families who have experienced our divine services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="divine-border bg-white">
                <div className="flex-1">
                  <p className="text-gray-600 italic mb-4">
                    "The Griha Pravesh ceremony was conducted with such devotion
                    and authenticity. The pandit was knowledgeable and guided us
                    through each step."
                  </p>
                  <p className="font-medium text-maroon">
                    - Sharma Family, Chennai
                  </p>
                </div>
              </div>

              <div className="divine-border bg-white">
                <div className="flex-1">
                  <p className="text-gray-600 italic mb-4">
                    "We are grateful for the beautiful Naamkaran ceremony for
                    our daughter. The rituals were explained in a way that made
                    them meaningful for our generation."
                  </p>
                  <p className="font-medium text-maroon">
                    - Patel Family, Mumbai
                  </p>
                </div>
              </div>

              <div className="divine-border bg-white">
                <div className="flex-1">
                  <p className="text-gray-600 italic mb-4">
                    "The Satyanarayana Pooja was conducted with such precision
                    and devotion. We felt truly blessed and continue to
                    experience its positive effects."
                  </p>
                  <p className="font-medium text-maroon">
                    - Reddy Family, Bangalore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gradient-to-r from-maroon to-saffron">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Begin Your Spiritual Journey Today
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Connect with us to learn more about our services and how we can
              support your spiritual needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                variant="outline"
                className="bg-white text-maroon border-white hover:bg-white/90"
              >
                <Link to="/services">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Service
                </Link>
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white hover:text-white border-green-600"
                onClick={handleCustomizedQuote}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get Customized Quote
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white text-maroon border-white hover:bg-white/90"
              >
                <Link to="/about">
                  <Info className="mr-2 h-4 w-4" />
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
