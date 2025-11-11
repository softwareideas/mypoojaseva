import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PoojaCard from './PoojaCard';
import { getAllPoojas, groupPoojasByCategory, formatCategoryLabel } from "@/utils/poojas";

const PoojaCategoriesCarousel = () => {
  const [api, setApi] = useState<any>();
  
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api]);

  // Build categories from poojas.json dynamically
  const dynamic = useMemo(() => {
    const poojas = getAllPoojas();
    const grouped = groupPoojasByCategory(poojas);
    const categories = Object.keys(grouped).map((id) => ({
      id,
      title: formatCategoryLabel(id),
      poojas: grouped[id].slice(0, 6), // show up to 6 per category
    }));
    return categories;
  }, []);

  const [activeCategory, setActiveCategory] = useState(dynamic[0]?.id || "");

  const activePoojas = useMemo(
    () => dynamic.find(cat => cat.id === activeCategory)?.poojas || [],
    [dynamic, activeCategory]
  );

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
            {dynamic.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${activeCategory === category.id 
                  ? "bg-gold text-white hover:bg-gold/90" 
                  : "border-gold text-gold hover:bg-gold/10"}`}
              >
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

