import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles } from "lucide-react";

interface PoojaCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: string;
  duration?: string;
  pandits?: number | string;
  category: string;
}

const PoojaCard: React.FC<PoojaCardProps> = ({
  id,
  name,
  description,
  image,
  price,
  duration,
  pandits,
  category,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/pooja/${id}`} className="block h-full">
      <Card className="group overflow-hidden border border-gray-200/60 bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-maroon/20 h-full flex flex-col cursor-pointer">
      <div className="relative overflow-hidden h-48">
        {!imageError ? (
          <img 
            src={image || `https://source.unsplash.com/random/400x300?hindu+pooja&sig=${id}`} 
            alt={name}
            className={`w-full h-full object-fill transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-maroon/10 via-saffron/10 to-amber-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-maroon/30 mx-auto mb-2" />
              <p className="text-xs text-maroon/50 font-medium uppercase tracking-wider">Sacred Ceremony</p>
            </div>
          </div>
        )}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 via-saffron/5 to-amber-50 animate-pulse" />
        )}
        <div className="absolute top-2 right-2">
          <span className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-2.5 py-1 rounded-[4px] text-[10px] uppercase tracking-wider font-semibold">
            {duration || "1 Day"}
          </span>
        </div>
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-lg font-bold text-maroon mb-2 line-clamp-1 group-hover:text-saffron transition-colors duration-300">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {pandits && (
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{pandits} Pandits</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex items-end justify-between gap-3">
        {price && (
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Starting from</span>
            <span className="text-lg font-bold text-maroon">₹ {price}</span>
          </div>
        )}
        <Button variant="outline" className="w-auto px-6 border-maroon/20 hover:border-maroon text-maroon hover:text-white hover:bg-maroon h-9 text-xs uppercase tracking-wide font-medium">
          View Details
        </Button>
      </CardFooter>
      </Card>
    </Link>
  );
};

export default PoojaCard;

