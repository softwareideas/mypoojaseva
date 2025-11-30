
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Phone, Info, Calendar, Search, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoSVG from './LogoSVG';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const handleBookPooja = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    navigate('/services');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-maroon/10' 
        : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="transform transition-transform duration-300 group-hover:scale-105">
                <LogoSVG size={44} showText={true} />
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            <div className="flex items-center space-x-6">
              <NavLink to="/" icon={<Home size={18} />}>Home</NavLink>
              <NavLink to="/services" icon={<Calendar size={18} />}>Services</NavLink>
              <NavLink to="/about" icon={<Info size={18} />}>About</NavLink>
              <NavLink to="/contact" icon={<Phone size={18} />}>Contact</NavLink>
            </div>
            <div className="flex items-center space-x-3">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 w-48 focus:w-64 transition-all duration-300 border-saffron/30 focus:border-saffron focus:ring-2 focus:ring-saffron/30 rounded-full text-sm outline-none shadow-none"
                />
              </form>
              <Button 
                onClick={handleBookPooja} 
                type="button" 
                className="bg-maroon hover:bg-maroon/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                Book Pooja
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-maroon hover:text-white hover:bg-maroon transition-colors duration-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search poojas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 border-gray-200 focus:border-maroon rounded-lg"
              />
            </div>
          </form>
          <MobileNavLink to="/" icon={<Home size={20} />}>Home</MobileNavLink>
          <MobileNavLink to="/services" icon={<Calendar size={20} />}>Services</MobileNavLink>
          <MobileNavLink to="/about" icon={<Info size={20} />}>About</MobileNavLink>
          <MobileNavLink to="/contact" icon={<Phone size={20} />}>Contact</MobileNavLink>
          <div className="pt-3">
            <Button 
              onClick={handleBookPooja} 
              className="w-full bg-maroon hover:bg-maroon/90 text-white rounded-lg py-3 shadow-md"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Book Pooja
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium flex items-center transition-all duration-200 group ${
        isActive 
          ? 'text-maroon' 
          : 'text-gray-600 hover:text-maroon'
      }`}
    >
      {icon && <span className="mr-1.5 transition-transform group-hover:scale-110">{icon}</span>}
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-maroon transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-maroon text-white shadow-md' 
          : 'text-gray-700 hover:bg-maroon/10 hover:text-maroon'
      }`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </Link>
  );
};

export default Navbar;
