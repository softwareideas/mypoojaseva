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
import { getAllPoojas, getUniqueCategories, formatCategoryLabel } from "@/utils/poojas";

const allPoojas = getAllPoojas();

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

  // Build categories dynamically from poojas.json
  const categories = useMemo(() => {
    const unique = getUniqueCategories(allPoojas);
    return [
      { id: "all", name: "All" },
      ...unique.map((id) => ({ id, name: formatCategoryLabel(id) })),
    ];
  }, []);

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
