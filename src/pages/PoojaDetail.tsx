import React, { useState } from "react";
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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import poojasData from "@/data/poojas.json";

const PoojaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<
    number | null
  >(1); // Default to second package (index 1)

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gold/5">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gold/20 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-gold">
                Pooja Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-maroon">{pooja.name}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(pooja.rating)
                          ? "fill-gold text-gold"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">
                    ({pooja.reviews} reviews)
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-maroon mb-4">
                  {pooja.name}
                </h1>
                <p className="text-lg text-gray-700">{pooja.description}</p>
              </div>

              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={pooja.image}
                  alt={pooja.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Full Description */}
              {pooja.fullDescription && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-maroon">
                      About This Pooja
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-line text-gray-700">
                      {pooja.fullDescription}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Key Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon">
                    Ceremony Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium text-gray-900">
                          {pooja.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pandits</p>
                        <p className="font-medium text-gray-900">
                          {pooja.pandits}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium text-gray-900">
                          {pooja.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Packages */}
              <div>
                <h2 className="text-2xl font-bold text-maroon mb-6">
                  Choose Your Package
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {pooja.packages?.map((pkg: any, index: number) => {
                    const isSelected = selectedPackageIndex === index;
                    return (
                      <Card
                        key={index}
                        className={`border-2 flex flex-col cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "border-gold bg-gold/5 shadow-lg scale-105"
                            : "border-gray-200 hover:border-gold/50 hover:shadow-md"
                        }`}
                        style={{ minHeight: "100%", height: "100%" }}
                        onClick={() => setSelectedPackageIndex(index)}
                      >
                        <CardHeader className="flex-shrink-0">
                          <CardTitle className="text-maroon">
                            {pkg.name}
                          </CardTitle>
                          <div className="text-3xl font-bold text-gold mt-2">
                            ₹ {pkg.price}
                          </div>
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
                              className={`w-full ${
                                isSelected ? "bg-gold hover:bg-gold/90" : ""
                              }`}
                              variant={isSelected ? "default" : "outline"}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookNow(pkg);
                              }}
                            >
                              Book Now
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
                <Card>
                  <CardHeader>
                    <CardTitle className="text-maroon">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {pooja.faq.map((item: any, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left text-gray-900">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">
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
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-maroon">Book This Pooja</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-gold to-saffron text-white"
                      onClick={() => handleBookNow(pooja)}
                    >
                      Select Date & Book
                    </Button>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white hover:text-white border-green-600"
                      onClick={() => handleCustomizedQuote()}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Get Customized Quote
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      You can modify or cancel your booking anytime
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoojaDetail;
