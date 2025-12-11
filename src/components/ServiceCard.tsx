
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  color = "from-saffron to-saffron" 
}) => {
  return (
    <Card className="overflow-hidden border border-saffron/20 transition-all duration-300 hover:shadow-lg hover:border-saffron/40 h-full flex flex-col">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-maroon">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          {/* Content could be dynamically generated */}
        </ul>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="ghost" className="w-full justify-between hover:bg-saffron/10 text-saffron">
          <Link to={link} className="flex items-center">
            <span>Learn More</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
