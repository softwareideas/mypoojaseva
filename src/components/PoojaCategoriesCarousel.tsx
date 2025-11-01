import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PoojaCard from './PoojaCard';

const PoojaCategoriesCarousel = () => {
  const [api, setApi] = useState<any>();
  
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api]);

  const categories = [
    {
      id: "birth",
      title: "Birth Ceremonies",
      icon: "👶",
      poojas: [
        {
          id: "namakaran",
          name: "Naamkaran (Naming Ceremony)",
          description: "Sacred naming ceremony performed 11 days after birth to bless the child with an auspicious name.",
          image: "https://images.unsplash.com/photo-0011082951354-61dd5dfe4b99?w=800",
          price: "4,800",
          duration: "2-3 hours",
          pandits: 1
        },
        {
          id: "annaprasan",
          name: "Annaprasan (First Feeding)",
          description: "Baby's first solid food ceremony, marking the beginning of new dietary journey.",
          image: "https://images.unsplash.com/photo-1542814079-08d81c46cf5c?w=800",
          price: "3,900",
          duration: "1-2 hours",
          pandits: 1
        },
        {
          id: "mundan",
          name: "Mundan (First Haircut)",
          description: "Religious first haircut ceremony to purify and bless the child's life journey.",
          image: "https://images.unsplash.com/photo-1582610285985-a42d9192130c?w=800",
          price: "3,500",
          duration: "1-2 hours",
          pandits: 1
        },
        {
          id: "chudakaran",
          name: "Chudakaran (Thread Wearing)",
          description: "Sacred thread ceremony marking the child's entry into spiritual education.",
          image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800",
          price: "5,200",
          duration: "2 hours",
          pandits: 1
        }
      ]
    },
    {
      id: "marriage",
      title: "Marriage Ceremonies",
      icon: "💒",
      poojas: [
        {
          id: "vivah",
          name: "Vivah Sanskar",
          description: "Complete Hindu wedding ceremony with all sacred rituals and Vedic chants.",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
          price: "45,000",
          duration: "Full Day",
          pandits: 3
        },
        {
          id: "engagement",
          name: "Mangni (Engagement)",
          description: "Pre-wedding engagement ceremony to formalize the commitment.",
          image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
          price: "12,000",
          duration: "2-3 hours",
          pandits: 1
        },
        {
          id: "haldi",
          name: "Haldi & Mehendi",
          description: "Traditional pre-wedding ceremonies for blessing and celebration.",
          image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
          price: "8,500",
          duration: "3-4 hours",
          pandits: 2
        }
      ]
    },
    {
      id: "homam",
      title: "Homam & Yajna",
      icon: "🔥",
      poojas: [
        {
          id: "ganesha-homam",
          name: "Ganapathi Homam",
          description: "Sacred fire ritual to invoke Lord Ganesha's blessings for removing obstacles.",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
          price: "8,900",
          duration: "2-3 hours",
          pandits: 2
        },
        {
          id: "navagraha",
          name: "Navagraha Homam",
          description: "Fire ritual to appease nine planetary deities for cosmic balance and harmony.",
          image: "https://images.unsplash.com/photo-1606924465501-66479f09c63b?w=800",
          price: "14,800",
          duration: "3 hours",
          pandits: 2
        },
        {
          id: "rudra-abhishekam",
          name: "Rudra Abhishekam",
          description: "Sacred bathing of Shiva Lingam with traditional substances and Vedic mantras.",
          image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
          price: "12,500",
          duration: "2-3 hours",
          pandits: 2
        },
        {
          id: "suda-santhi",
          name: "Suda Santhi Homam",
          description: "Remedial fire ceremony for correcting planetary imbalances and doshas.",
          image: "https://images.unsplash.com/photo-1528634205781-9b51b318769e?w=800",
          price: "16,900",
          duration: "3-4 hours",
          pandits: 3
        }
      ]
    },
    {
      id: "grihapravesh",
      title: "Griha Pravesh",
      icon: "🏠",
      poojas: [
        {
          id: "new-home",
          name: "New Home Pooja",
          description: "House warming ceremony for new homes to purify and bless the dwelling.",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
          price: "12,800",
          duration: "3-4 hours",
          pandits: 2
        },
        {
          id: "vastu-shanti",
          name: "Vastu Shanti Pooja",
          description: "Ritual to harmonize home energy and directions for prosperity.",
          image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800",
          price: "15,900",
          duration: "4-5 hours",
          pandits: 2
        }
      ]
    },
    {
      id: "festival",
      title: "Festival Poojas",
      icon: "🎉",
      poojas: [
        {
          id: "satyanarayan",
          name: "Satyanarayana Pooja",
          description: "Monthly prosperity and peace ritual dedicated to Lord Vishnu.",
          image: "https://images.unsplash.com/photo-1606787947088-1d19f510b9f3?w=800",
          price: "4,200",
          duration: "2 hours",
          pandits: 1
        },
        {
          id: "diwali",
          name: "Diwali Lakshmi Pooja",
          description: "Festival of lights with Goddess Lakshmi worship for wealth and prosperity.",
          image: "https://images.unsplash.com/photo-1606756790138-2610044de2c6?w=800",
          price: "6,800",
          duration: "3 hours",
          pandits: 2
        },
        {
          id: "durga-pooja",
          name: "Durga Pooja",
          description: "Nine nights of Goddess Durga worship during Navratri festival.",
          image: "https://images.unsplash.com/photo-1531572753323-ad0634ccd032?w=800",
          price: "9,900",
          duration: "1-9 Days",
          pandits: 2
        },
        {
          id: "ganesh-chaturthi",
          name: "Ganesh Chaturthi Pooja",
          description: "Lord Ganesha's birthday celebration with special prayers and rituals.",
          image: "https://images.unsplash.com/photo-1594736797933-d040fba4ab76?w=800",
          price: "5,500",
          duration: "2-3 hours",
          pandits: 1
        }
      ]
    },
    {
      id: "special",
      title: "Special Occasions",
      icon: "🌟",
      poojas: [
        {
          id: "vehicle",
          name: "Vehicle Pooja",
          description: "Blessing new vehicles for safe journeys and protection from accidents.",
          image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
          price: "3,200",
          duration: "1 hour",
          pandits: 1
        },
        {
          id: "chandi-homam",
          name: "Chandi Homam",
          description: "Powerful fire ritual dedicated to Goddess Chandi for victory and protection.",
          image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800",
          price: "18,900",
          duration: "4-5 hours",
          pandits: 3
        },
        {
          id: "mahamrityunjaya",
          name: "Mahamrityunjaya Jaap",
          description: "Chanting of life-giving mantra for health, longevity, and healing.",
          image: "https://images.unsplash.com/photo-1519066028946-7d5562edabf3?w=800",
          price: "8,200",
          duration: "3 hours",
          pandits: 2
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activePoojas = categories.find(cat => cat.id === activeCategory)?.poojas || [];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gold/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon mb-3">Divine Pooja Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience authentic Hindu rituals and ceremonies performed by experienced pandits
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${activeCategory === category.id 
                  ? "bg-gold text-white hover:bg-gold/90" 
                  : "border-gold text-gold hover:bg-gold/10"}`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-8 md:px-12">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {activePoojas.map((pooja) => (
                <CarouselItem key={pooja.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <PoojaCard {...pooja} category={activeCategory} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8 lg:-left-12" />
            <CarouselNext className="-right-4 md:-right-8 lg:-right-12" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-gradient-to-r from-gold to-saffron text-white">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PoojaCategoriesCarousel;

