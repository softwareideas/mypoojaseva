
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Phone, Info, Calendar, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoSVG from './LogoSVG';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

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
    <nav className="bg-background border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <LogoSVG size={40} showText={true} />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block flex-1 ml-10">
            <form onSubmit={handleSearch} className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search poojas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border-gold/20 focus:border-gold w-full"
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                />
              </div>
              <NavLink to="/" icon={<Home size={18} />}>Home</NavLink>
              <NavLink to="/about" icon={<Info size={18} />}>About</NavLink>
              <NavLink to="/contact" icon={<Phone size={18} />}>Contact</NavLink>
              <Button onClick={handleBookPooja} type="button" className="pooja-button spiritual-glow">Book Pooja</Button>
            </form>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-maroon hover:text-gold hover:bg-gold/10 focus:outline-none"
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-gold/20">
          <form onSubmit={handleSearch} className="px-3 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search poojas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border-gold/20 focus:border-gold"
              />
            </div>
          </form>
          <MobileNavLink to="/" icon={<Home size={18} />}>Home</MobileNavLink>
          <MobileNavLink to="/about" icon={<Info size={18} />}>About</MobileNavLink>
          <MobileNavLink to="/contact" icon={<Phone size={18} />}>Contact</MobileNavLink>
          <div className="pt-2">
            <Button onClick={handleBookPooja} className="w-full pooja-button spiritual-glow">Book Pooja</Button>
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
  return (
    <Link
      to={to}
      className="text-maroon hover:text-gold px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, icon }) => {
  return (
    <Link
      to={to}
      className="text-maroon hover:bg-gold/10 hover:text-gold block px-3 py-2 rounded-md text-base font-medium flex items-center"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};

export default Navbar;
