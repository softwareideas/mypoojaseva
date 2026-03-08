import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
import {
  getAllPoojas,
  getUniqueCategories,
  formatCategoryLabel,
  searchPoojas,
} from "@/utils/poojas";

const allPoojas = getAllPoojas();

const AllServices = () => {
  const phoneNumber = "918608765113";
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const filteredPoojas = useMemo(() => {
    return searchPoojas(allPoojas, searchQuery);
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

  const handleCustomPoojaWhatsApp = () => {
    const categoryLabel =
      selectedCategory === "all" ? "Any category" : formatCategoryLabel(selectedCategory);
    const query = searchQuery.trim() || "No specific pooja name";
    const message = `Hello, I couldn't find the pooja I want on your website.\n\nRequested Pooja: *${query}*\nCategory: *${categoryLabel}*\n\nPlease share availability and price.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
  const [visibleCount, setVisibleCount] = useState(3);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const displayedPoojas =
    selectedCategory === "all"
      ? filteredPoojas
      : filteredPoojas.filter((p) => p.category === selectedCategory);

  const visiblePoojas = displayedPoojas.slice(0, visibleCount);
  const hasMore = visibleCount < displayedPoojas.length;

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(3);
  }, [selectedCategory, searchQuery]);

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore) {
        setVisibleCount((prev) => Math.min(prev + 6, displayedPoojas.length));
      }
    },
    [hasMore, displayedPoojas.length]
  );

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-softSaffron/5">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
         <div className="bg-gradient-to-br from-maroon/5 via-saffron/5 to-softSaffron/10 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#FFD8A8,transparent_50%),radial-gradient(circle_at_bottom_left,#FF9933,transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-maroon mb-4 text-center text-shadow-lg">
              All Pooja Services
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Discover the richness of Hindu rituals and ceremonies, performed with devotion and tradition.
              <br />
              <strong className="text-saffron">
                Explore our complete collection - a premium blend of authenticity and spirituality.
              </strong>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter */}
          <div className="mb-12 space-y-8">
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
                className="pl-12 pr-4 py-3 text-base rounded-lg shadow-sm border border-maroon/30 focus:border-saffron focus:ring-0 focus:outline-none bg-white focus:bg-saffron/10 transition-all duration-200"
              />
            </form>

            {/* Category Filter - Simple Pills */}
            <div className="flex gap-2 overflow-x-auto py-2 -mx-1 scrollbar-hide snap-x snap-mandatory">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`snap-center shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-maroon text-white shadow-sm"
                        : "bg-maroon/5 text-maroon hover:bg-maroon/10"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Poojas Grid */}
          {displayedPoojas.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePoojas.map((pooja, index) => (
                  <div
                    key={pooja.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${(index % 6) * 100}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <PoojaCard {...pooja} />
                  </div>
                ))}
              </div>
              {hasMore && (
                <div
                  ref={loadMoreRef}
                  className="flex justify-center items-center py-12"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-3 border-maroon/30 border-t-maroon rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-500 font-medium">
                      Loading more services...
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">
                No poojas found matching your search.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters or search terms.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  type="button"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleCustomPoojaWhatsApp}
                >
                  Request Custom Pooja on WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllServices;
