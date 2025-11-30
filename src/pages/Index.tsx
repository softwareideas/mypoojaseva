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
              icon={<Users className="h-6 w-6 text-saffron" />}
              link="/services#marriage"
              color="from-saffron to-maroon"
            />
            <ServiceCard 
              title="Grihastha (Householder)" 
              description="Rituals for prosperity, wellbeing and spiritual growth."
              icon={<Home className="h-6 w-6 text-saffron" />}
              link="/services#grihastha"
              color="from-saffron to-softSaffron"
            />
            <ServiceCard 
              title="Spiritual Practices" 
              description="Guidance for spiritual advancement and enlightenment."
              icon={<Bell className="h-6 w-6 text-spiritualGreen" />}
              link="/services#spiritual"
              color="from-spiritualGreen to-softSaffron"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-gradient-to-r from-saffron to-saffron text-white">
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
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/5 to-maroon/5"></div>
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
                        <div className="h-8 w-8 rounded-full bg-saffron/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-saffron">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Ganapathi Homam</h4>
                          <p className="text-sm text-gray-600">Invoke Lord Ganesha's blessings to remove obstacles</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-saffron/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-saffron">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Satyanarayana Pooja</h4>
                          <p className="text-sm text-gray-600">Ritual dedicated to Lord Vishnu for prosperity</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-saffron/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-saffron">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Griha Pravesh</h4>
                          <p className="text-sm text-gray-600">Traditional housewarming ceremony</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-saffron/10 flex items-center justify-center mr-3 mt-1">
                          <span className="text-saffron">ॐ</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-maroon">Navagraha Homam</h4>
                          <p className="text-sm text-gray-600">Appease the nine planets for positive energy</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6 bg-saffron/10" />
                    
                    <div>
                      <h4 className="font-medium text-maroon mb-2">Why Choose Our Services:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron mr-2"></div>
                          <span>Experienced and knowledgeable pandits</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron mr-2"></div>
                          <span>Complete samagri (materials) arrangement</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron mr-2"></div>
                          <span>Personalized guidance and explanation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron mr-2"></div>
                          <span>Services available in multiple languages</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-gradient-to-r from-saffron to-softSaffron text-white">
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
        <section className="py-20 bg-saffron/5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-saffron mb-2">
                Voices of Devotion
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-4">
                Devotees Who Have Welcomed The Divine Home
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every ceremony is conducted with care, authenticity, and
                attention to tradition, so your family can simply be present in
                the sacred moment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="divine-border bg-white/95 backdrop-blur-sm flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "The Griha Pravesh ceremony was conducted with such devotion
                    and authenticity. The pandit was knowledgeable and guided us
                    through each step."
                  </p>
                  <p className="font-semibold text-maroon text-sm tracking-wide">
                    Sharma Family, Chennai
                  </p>
                </div>
              </div>

              <div className="divine-border bg-white/95 backdrop-blur-sm flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "We are grateful for the beautiful Naamkaran ceremony for
                    our daughter. The rituals were explained in a way that made
                    them meaningful for our generation."
                  </p>
                  <p className="font-semibold text-maroon text-sm tracking-wide">
                    Patel Family, Mumbai
                  </p>
                </div>
              </div>

              <div className="divine-border bg-white/95 backdrop-blur-sm flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "The Satyanarayana Pooja was conducted with such precision
                    and devotion. We felt truly blessed and continue to
                    experience its positive effects."
                  </p>
                  <p className="font-semibold text-maroon text-sm tracking-wide">
                    Reddy Family, Bangalore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-maroon to-saffron">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/15 px-6 py-10 sm:px-10 sm:py-12 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-amber/10 via-amber/10 to-transparent/10" />
              <div className="relative z-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
                <div className="mb-8 sm:mb-0 max-w-xl">
                  <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-100 mb-3">
                    Begin Your Spiritual Journey
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Plan your next pooja with trusted, traditional guidance.
                  </h2>
                  <p className="text-sm sm:text-base text-white/85">
                    Share your requirements with us and we&apos;ll help you
                    choose the right pooja, schedule, and pandit for your home
                    or event.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3 min-w-[260px]">
                  <Button
                    asChild
                    variant="outline"
                    className="shadow-md hover:shadow-lg"
                  >
                    <Link to="/services">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Service
                    </Link>
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white hover:text-white border-green-600 shadow-md hover:shadow-lg"
                    onClick={handleCustomizedQuote}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Customized Quote
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="shadow-md hover:shadow-lg"
                  >
                    <Link to="/about">
                      <Info className="mr-2 h-4 w-4" />
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
