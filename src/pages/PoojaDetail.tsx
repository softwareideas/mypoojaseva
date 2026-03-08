import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  X,
  Star,
  Calendar,
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Award,
  Shield,
  Heart,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import poojasData from "@/data/poojas.json";

const PoojaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<
    number | null
  >(0); // Default to first package
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = (packageData: any) => {
    navigate(`/booking/${id}`, {
      state: {
        poojaData: {
          ...pooja,
          ...packageData,
        },
      },
    });
  };

  const handleCustomizedQuote = (packageName?: string) => {
    const phoneNumber = "918608765113";
    const packageInfo = packageName ? ` for *${packageName}* package` : "";
    const message = `Hello, I'm interested in getting a customized quote for *${pooja.name}*${packageInfo}.\n\nPlease provide me with more details and pricing options.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Get pooja from JSON data
  const pooja: any =
    poojasData.poojas.find((p: any) => p.id === id) || poojasData.poojas[8]; // Default to navagraha

  // Add default rating and reviews if not present
  if (!pooja.rating) pooja.rating = 4.5;
  if (!pooja.reviews) pooja.reviews = 50;

  // Legacy data structure (keeping for reference)
  const poojaData: Record<string, any> = {
    navagraha: {
      name: "Navagraha Homam",
      description:
        "A powerful fire ritual to appease the nine planetary deities (Navagrahas) for cosmic balance, harmony, and positive energy in life. This homam helps in reducing the malefic effects of planets and enhances their benefic influences.",
      fullDescription: `Navagraha Homam is a comprehensive Vedic ritual dedicated to the nine celestial bodies that significantly influence human life. The nine planets (Grahas) are Surya (Sun), Chandra (Moon), Mangal (Mars), Budh (Mercury), Guru (Jupiter), Shukra (Venus), Shani (Saturn), Rahu (North Node), and Ketu (South Node).

This sacred fire ceremony is performed to balance planetary influences, remove obstacles, and bring harmony to various aspects of life including career, health, relationships, and prosperity. The ritual involves invoking each planetary deity with specific mantras, offerings, and prayers.

Key Benefits:
- Reduces malefic effects of unfavorable planetary positions
- Enhances positive planetary influences
- Brings balance to health and wellbeing
- Improves career and financial prospects
- Removes obstacles and delays in life
- Promotes harmony in relationships
- Provides spiritual growth and inner peace`,
      image:
        "https://images.unsplash.com/photo-1606924465501-66479f09c63b?w=800",
      rating: 4.8,
      reviews: 124,
      duration: "3-4 hours",
      pandits: "2-3",
      category: "Homam & Yajna",
      packages: [
        {
          name: "Basic Package",
          price: "14,800",
          features: {
            included: [
              "Pandit ji dakshina",
              "All Havan Items",
              "All Puja Items",
              "Havan Kunda",
              "Pandit Ji Travel Charges",
            ],
            excluded: ["Flowers", "Fruits", "More mantra chantings"],
          },
          duration: "1 day",
          pandits: 2,
        },
        {
          name: "Standard Package",
          price: "19,900",
          features: {
            included: [
              "Pandit ji dakshina",
              "All Havan Items",
              "All Puja Items",
              "Havan Kunda",
              "Pandit Ji Travel Charges",
              "Flowers",
              "Fruits",
              "More mantra chantings",
            ],
            excluded: [],
          },
          duration: "1 day",
          pandits: 3,
        },
        {
          name: "Premium Package",
          price: "28,500",
          features: {
            included: [
              "All Standard features",
              "Extended mantra recitation",
              "Special prasadam",
              "Photography",
              "Digital certificate",
              "Custom offerings",
            ],
            excluded: [],
          },
          duration: "1 day",
          pandits: 4,
        },
      ],
      faq: [
        {
          question: "What is Navagraha Homam?",
          answer:
            "Navagraha Homam is a Vedic fire ritual performed to appease the nine planetary deities (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu) to reduce their malefic effects and enhance their positive influences on one's life.",
        },
        {
          question: "When should this homam be performed?",
          answer:
            "It can be performed on auspicious days throughout the year. However, it's especially beneficial during times of planetary transitions, during Shukra Dasha, or when experiencing delays and obstacles in life.",
        },
        {
          question: "What items should we prepare at home?",
          answer:
            "You need to prepare a clean, well-ventilated space for the pooja. Our pandits will bring all necessary items including havan samagri, puja materials, and the sacred fire vessel. You may prepare fresh fruits and flowers if needed.",
        },
        {
          question: "How many people can participate?",
          answer:
            "Family members can actively participate in the ritual. Typically 10-15 people can comfortably participate. However, there's no strict limit - all family members are welcome to attend and benefit.",
        },
        {
          question: "What should I wear for the ceremony?",
          answer:
            "Wear clean, traditional Indian attire. For men: Dhoti/Kurta or white shirt with dhoti. For women: Saree or Salwar Kameez in light colors. Avoid black or red colored clothes.",
        },
        {
          question: "Can we book for a specific muhurta?",
          answer:
            "Yes, we can help you select an auspicious muhurta based on your birth chart. Please mention your requirement during booking, and our pandit will calculate the best time for you.",
        },
        {
          question: "Will we get prasadam and certificate?",
          answer:
            "Yes, prasadam (blessed food) will be distributed after the ceremony. Digital certificates are available upon request for premium packages.",
        },
        {
          question: "What languages are supported?",
          answer:
            "Our pandits can perform the ceremony in multiple languages including Hindi, Sanskrit, Tamil, Telugu, Kannada, and English explanations. Please mention your preference during booking.",
        },
      ],
    },
    // Add more pooja details as needed
    satyanarayan: {
      name: "Satyanarayana Pooja",
      description:
        "Monthly prosperity and peace ritual dedicated to Lord Vishnu for blessings of wealth, happiness, and family harmony.",
      image:
        "https://images.unsplash.com/photo-1606787947088-1d19f510b9f3?w=800",
      rating: 4.9,
      reviews: 89,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50/20 to-rose-50/10">
      <Navbar />

      <main className="flex-grow">
        {/* Enhanced Breadcrumb */}
        <div className="bg-gradient-to-r from-white to-amber-50/30 border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center text-sm font-medium">
              <Link to="/" className="text-gray-500 hover:text-maroon transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              <Link to="/services" className="text-gray-500 hover:text-maroon transition-colors flex items-center gap-1">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              <span className="text-maroon font-semibold">{pooja.name}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header with Badge */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-maroon/10 to-saffron/10 border border-maroon/20 rounded-full mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-saffron" />
                  <span className="text-xs font-semibold text-maroon uppercase tracking-wider">
                    {pooja.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent mb-4">
                  {pooja.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(pooja.rating)
                            ? "fill-saffron text-saffron"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-lg font-semibold text-gray-900 ml-2">
                      {pooja.rating}
                    </span>
                  </div>
                  <div className="h-5 w-px bg-gray-300" />
                  <span className="text-gray-600 font-medium">
                    {pooja.reviews} reviews
                  </span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">{pooja.description}</p>
              </div>

              {/* Main Image with Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}>
                <div className="aspect-[16/9] relative">
                  {!imageError ? (
                    <>
                      <img
                        src={pooja.image}
                        alt={pooja.name}
                        className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                      />
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 via-saffron/10 to-amber-50 animate-pulse" />
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-maroon/20 via-saffron/20 to-amber-100/40 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="h-20 w-20 text-maroon/40 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-maroon/60 mb-2">{pooja.name}</h3>
                        <p className="text-sm text-maroon/40 uppercase tracking-wider">Sacred Hindu Ceremony</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        <span className="font-medium">Authentic Rituals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        <span className="font-medium">Experienced Pandits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              {pooja.fullDescription && (
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-maroon flex items-center gap-2">
                      <Heart className="h-6 w-6 text-saffron" />
                      About This Sacred Ceremony
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed text-base">
                      {pooja.fullDescription}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Key Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-amber-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/10 rounded-full blur-2xl group-hover:bg-saffron/20 transition-colors" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-maroon to-saffron flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {pooja.duration}
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-rose-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/10 rounded-full blur-2xl group-hover:bg-maroon/20 transition-colors" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-saffron to-maroon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Pandits</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {pooja.pandits}
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-amber-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/10 rounded-full blur-2xl group-hover:bg-saffron/20 transition-colors" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-maroon to-saffron flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Category</p>
                    <p className="text-xl font-bold text-gray-900">
                      {pooja.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Packages */}
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-maroon mb-2">
                    Choose Your Perfect Package
                  </h2>
                  <p className="text-gray-600">Select the package that best suits your needs and preferences</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {pooja.packages?.map((pkg: any, index: number) => {
                    const isSelected = selectedPackageIndex === index;
                    const isPopular = index === 1;
                    return (
                      <Card
                        key={index}
                        className={`relative border-2 flex flex-col cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden ${
                          isSelected
                            ? "border-maroon bg-gradient-to-br from-maroon/5 to-saffron/5 shadow-2xl scale-105 ring-4 ring-maroon/20"
                            : "border-gray-200 hover:border-maroon/30 hover:shadow-xl hover:scale-102"
                        }`}
                        style={{ minHeight: "100%", height: "100%" }}
                        onClick={() => setSelectedPackageIndex(index)}
                      >
                        {isPopular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-maroon to-saffron text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg">
                            <Sparkles className="h-3 w-3 inline mr-1" />
                            POPULAR
                          </div>
                        )}
                        <CardHeader className="flex-shrink-0 pb-4">
                          <CardTitle className="text-xl font-bold text-maroon mb-3">
                            {pkg.name}
                          </CardTitle>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent">
                              ₹{pkg.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow space-y-4 min-h-0">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Includes:
                            </h4>
                            <ul className="space-y-1">
                              {pkg.features.included.map(
                                (feature: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          {pkg.features.excluded.length > 0 && (
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Not Included:
                              </h4>
                              <ul className="space-y-1">
                                {pkg.features.excluded.map(
                                  (feature: string, i: number) => (
                                    <li
                                      key={i}
                                      className="flex items-center text-sm text-gray-400"
                                    >
                                      <X className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                          <Separator className="my-4" />
                          <div className="text-sm text-gray-600">
                            <p className="flex items-center mb-1">
                              <Clock className="h-4 w-4 mr-2" />
                              {pkg.duration}
                            </p>
                            <p className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              {pkg.pandits} Pandits
                            </p>
                          </div>
                          <div className="mt-auto pt-4">
                            <Button
                              className={`w-full rounded-xl py-6 font-semibold transition-all duration-300 ${
                                isSelected 
                                  ? "bg-gradient-to-r from-maroon to-saffron hover:from-maroon/90 hover:to-saffron/90 text-white shadow-lg" 
                                  : "border-2 border-maroon/30 text-maroon hover:bg-maroon hover:text-white"
                              }`}
                              variant={isSelected ? "default" : "outline"}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookNow(pkg);
                              }}
                            >
                              {isSelected ? "Selected - Book Now" : "Select Package"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* FAQ */}
              {pooja.faq && pooja.faq.length > 0 && (
                <Card className="border-none shadow-xl bg-white animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-maroon">
                      Frequently Asked Questions
                    </CardTitle>
                    <p className="text-gray-600 mt-2">Everything you need to know about this ceremony</p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {pooja.faq.map((item: any, index: number) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-xl px-6 hover:border-maroon/30 transition-colors"
                        >
                          <AccordionTrigger className="text-left text-gray-900 font-semibold hover:text-maroon py-5">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Booking Form */}
            <div>
              <div className={`sticky transition-all duration-300 ${
                scrollY > 100 ? 'top-24' : 'top-28'
              }`}>
                <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-amber-50/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-3xl" />
                  <CardHeader className="relative">
                    <CardTitle className="text-2xl font-bold text-maroon flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-saffron" />
                      Book This Pooja
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-2">Secure your preferred date and time</p>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-4">
                      {/* Price Display */}
                      {selectedPackageIndex !== null && pooja.packages?.[selectedPackageIndex] && (
                        <div className="bg-white rounded-xl p-4 border-2 border-maroon/20">
                          <p className="text-sm text-gray-600 mb-1">Selected Package</p>
                          <p className="text-lg font-bold text-maroon">{pooja.packages[selectedPackageIndex].name}</p>
                          <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-3xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent">
                              ₹{pooja.packages[selectedPackageIndex].price}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <Button
                        className="w-full bg-gradient-to-r from-maroon to-saffron hover:from-maroon/90 hover:to-saffron/90 text-white rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        onClick={() => handleBookNow(pooja.packages?.[selectedPackageIndex ?? 0] || pooja)}
                      >
                        <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Select Date & Book Now
                      </Button>
                      
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-gradient-to-br from-white to-amber-50/50 px-2 text-gray-500">Or</span>
                        </div>
                      </div>
                      
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        onClick={() => handleCustomizedQuote()}
                      >
                        <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Get Customized Quote
                      </Button>
                      
                      {/* Trust Badges */}
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span>Free cancellation up to 24 hours</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-4 w-4 text-blue-600" />
                          </div>
                          <span>100% authentic rituals</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Award className="h-4 w-4 text-purple-600" />
                          </div>
                          <span>Experienced pandits</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoojaDetail;
