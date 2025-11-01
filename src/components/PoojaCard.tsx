import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PoojaCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: string;
  duration?: string;
  pandits?: number;
  category: string;
}

const PoojaCard: React.FC<PoojaCardProps> = ({ 
  name, 
  description, 
  image,
  price,
  duration,
  pandits,
  id 
}) => {
  return (
    <Link to={`/pooja/${id}`} className="block h-full">
      <Card className="group overflow-hidden border border-gold/20 transition-all duration-300 hover:shadow-lg hover:border-gold/40 h-full flex flex-col cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image || `https://source.unsplash.com/random/400x300?hindu+pooja&sig=${id}`} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-gold/90 text-white px-2 py-1 rounded text-xs font-medium">
            {duration || "1 Day"}
          </span>
        </div>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-maroon mb-2 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-3">{description}</p>
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
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {price && (
          <div className="text-center">
            <span className="text-2xl font-bold text-gold">₹ {price}</span>
            <span className="text-xs text-gray-500"> starting price</span>
          </div>
        )}
        <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
          View Details
        </Button>
      </CardFooter>
      </Card>
    </Link>
  );
};

export default PoojaCard;

