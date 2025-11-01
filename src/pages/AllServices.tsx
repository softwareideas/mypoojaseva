import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PoojaCard from "@/components/PoojaCard";
import categoriesData from "@/data/categories.json";

// This is the same data structure from PoojaCategoriesCarousel
const allPoojas = [
  {
    id: "namakaran",
    name: "Naamkaran (Naming Ceremony)",
    description:
      "Sacred naming ceremony performed 11 days after birth to bless the child with an auspicious name.",
    image: "https://images.unsplash.com/photo-0011082951354-61dd5dfe4b99?w=800",
    price: "4,800",
    duration: "2-3 hours",
    pandits: 1,
    category: "birth",
  },
  {
    id: "annaprasan",
    name: "Annaprasan (First Feeding)",
    description:
      "Baby's first solid food ceremony, marking the beginning of new dietary journey.",
    image: "https://images.unsplash.com/photo-1542814079-08d81c46cf5c?w=800",
    price: "3,900",
    duration: "1-2 hours",
    pandits: 1,
    category: "birth",
  },
  {
    id: "mundan",
    name: "Mundan (First Haircut)",
    description:
      "Religious first haircut ceremony to purify and bless the child's life journey.",
    image: "https://images.unsplash.com/photo-1582610285985-a42d9192130c?w=800",
    price: "3,500",
    duration: "1-2 hours",
    pandits: 1,
    category: "birth",
  },
  {
    id: "chudakaran",
    name: "Chudakaran (Thread Wearing)",
    description:
      "Sacred thread ceremony marking the child's entry into spiritual education.",
    image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800",
    price: "5,200",
    duration: "2 hours",
    pandits: 1,
    category: "birth",
  },
  {
    id: "vivah",
    name: "Vivah Sanskar",
    description:
      "Complete Hindu wedding ceremony with all sacred rituals and Vedic chants.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    price: "45,000",
    duration: "Full Day",
    pandits: 3,
    category: "marriage",
  },
  {
    id: "engagement",
    name: "Mangni (Engagement)",
    description: "Pre-wedding engagement ceremony to formalize the commitment.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
    price: "12,000",
    duration: "2-3 hours",
    pandits: 1,
    category: "marriage",
  },
  {
    id: "haldi",
    name: "Haldi & Mehendi",
    description:
      "Traditional pre-wedding ceremonies for blessing and celebration.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
    price: "8,500",
    duration: "3-4 hours",
    pandits: 2,
    category: "marriage",
  },
  {
    id: "ganesha-homam",
    name: "Ganapathi Homam",
    description:
      "Sacred fire ritual to invoke Lord Ganesha's blessings for removing obstacles.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    price: "8,900",
    duration: "2-3 hours",
    pandits: 2,
    category: "homam",
  },
  {
    id: "navagraha",
    name: "Navagraha Homam",
    description:
      "Fire ritual to appease nine planetary deities for cosmic balance and harmony.",
    image: "https://images.unsplash.com/photo-1606924465501-66479f09c63b?w=800",
    price: "14,800",
    duration: "3 hours",
    pandits: 2,
    category: "homam",
  },
  {
    id: "rudra-abhishekam",
    name: "Rudra Abhishekam",
    description:
      "Sacred bathing of Shiva Lingam with traditional substances and Vedic mantras.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
    price: "12,500",
    duration: "2-3 hours",
    pandits: 2,
    category: "homam",
  },
  {
    id: "suda-santhi",
    name: "Suda Santhi Homam",
    description:
      "Remedial fire ceremony for correcting planetary imbalances and doshas.",
    image: "https://images.unsplash.com/photo-1528634205781-9b51b318769e?w=800",
    price: "16,900",
    duration: "3-4 hours",
    pandits: 3,
    category: "homam",
  },
  {
    id: "new-home",
    name: "New Home Pooja",
    description:
      "House warming ceremony for new homes to purify and bless the dwelling.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    price: "12,800",
    duration: "3-4 hours",
    pandits: 2,
    category: "grihapravesh",
  },
  {
    id: "vastu-shanti",
    name: "Vastu Shanti Pooja",
    description:
      "Ritual to harmonize home energy and directions for prosperity.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800",
    price: "15,900",
    duration: "4-5 hours",
    pandits: 2,
    category: "grihapravesh",
  },
  {
    id: "satyanarayan",
    name: "Satyanarayana Pooja",
    description:
      "Monthly prosperity and peace ritual dedicated to Lord Vishnu.",
    image: "https://images.unsplash.com/photo-1606787947088-1d19f510b9f3?w=800",
    price: "4,200",
    duration: "2 hours",
    pandits: 1,
    category: "festival",
  },
  {
    id: "diwali",
    name: "Diwali Lakshmi Pooja",
    description:
      "Festival of lights with Goddess Lakshmi worship for wealth and prosperity.",
    image: "https://images.unsplash.com/photo-1606756790138-2610044de2c6?w=800",
    price: "6,800",
    duration: "3 hours",
    pandits: 2,
    category: "festival",
  },
  {
    id: "durga-pooja",
    name: "Durga Pooja",
    description:
      "Nine nights of Goddess Durga worship during Navratri festival.",
    image: "https://images.unsplash.com/photo-1531572753323-ad0634ccd032?w=800",
    price: "9,900",
    duration: "1-9 Days",
    pandits: 2,
    category: "festival",
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi Pooja",
    description:
      "Lord Ganesha's birthday celebration with special prayers and rituals.",
    image: "https://images.unsplash.com/photo-1594736797933-d040fba4ab76?w=800",
    price: "5,500",
    duration: "2-3 hours",
    pandits: 1,
    category: "festival",
  },
  {
    id: "vehicle",
    name: "Vehicle Pooja",
    description:
      "Blessing new vehicles for safe journeys and protection from accidents.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    price: "3,200",
    duration: "1 hour",
    pandits: 1,
    category: "special",
  },
  {
    id: "chandi-homam",
    name: "Chandi Homam",
    description:
      "Powerful fire ritual dedicated to Goddess Chandi for victory and protection.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800",
    price: "18,900",
    duration: "4-5 hours",
    pandits: 3,
    category: "special",
  },
  {
    id: "mahamrityunjaya",
    name: "Mahamrityunjaya Jaap",
    description:
      "Chanting of life-giving mantra for health, longevity, and healing.",
    image: "https://images.unsplash.com/photo-1519066028946-7d5562edabf3?w=800",
    price: "8,200",
    duration: "3 hours",
    pandits: 2,
    category: "special",
  },
];

const AllServices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const filteredPoojas = useMemo(() => {
    if (!searchQuery.trim()) return allPoojas;

    const query = searchQuery.toLowerCase();
    return allPoojas.filter(
      (pooja) =>
        pooja.name.toLowerCase().includes(query) ||
        pooja.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  const categories = categoriesData.categories;

  const [selectedCategory, setSelectedCategory] = useState("all");

  const displayedPoojas =
    selectedCategory === "all"
      ? filteredPoojas
      : filteredPoojas.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gold/5">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-temple-pattern py-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-maroon/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-4xl font-bold text-maroon mb-4 text-center">
              All Pooja Services
            </h1>
            <p className="text-xl text-gray-700 text-center">
              Explore our complete collection of Hindu rituals and ceremonies
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <form
              onSubmit={handleSearch}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for poojas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-gold/20 focus:border-gold"
              />
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-gold text-white hover:bg-gold/90"
                      : "border-gold text-gold hover:bg-gold/10"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-center text-gray-600">
              Showing {displayedPoojas.length}{" "}
              {displayedPoojas.length === 1 ? "service" : "services"}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Poojas Grid */}
          {displayedPoojas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedPoojas.map((pooja) => (
                <PoojaCard key={pooja.id} {...pooja} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No poojas found matching your search.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllServices;
