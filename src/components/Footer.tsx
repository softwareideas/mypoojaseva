import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-softSaffron/5 border-t border-saffron/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl text-maroon font-heading font-bold">
                My Pooja Seva
              </span>
              <span className="ml-2 text-xs text-saffron/80">Divine Services</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Guiding you through life's sacred Hindu rituals with authenticity
              and devotion.
            </p>
            <div className="flex mt-6 space-x-4">
              <SocialLink
                href="https://wa.me/918608765113"
                icon={<FaWhatsapp size={18} />}
              />
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink to="/services/birth-ceremonies">Birth Ceremonies</FooterLink>
              <FooterLink to="/services/marriage-rituals">Marriage Rituals</FooterLink>
              <FooterLink to="/services/griha-pravesh">Griha Pravesh</FooterLink>
              <FooterLink to="/services/homam-services">Homam Services</FooterLink>
              <FooterLink to="/services/spiritual-guidance">Spiritual Guidance</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink to="/resources/ritual-guides">Ritual Guides</FooterLink>
              <FooterLink to="/services">All Services</FooterLink>
              <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/refund-policy">Refund Policy</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="text-saffron mr-2" />
                <span className="text-gray-600 text-sm">+91 86087 65113</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-saffron mr-2" />
                <span className="text-gray-600 text-sm">
                  mypoojaseva@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-saffron/10">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} My Pooja Seva - Divine Services. All rights
            reserved. Made with{" "}
            <Heart size={14} className="inline text-maroon" /> and devotion.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-saffron transition duration-300 h-8 w-8 flex items-center justify-center rounded-full bg-saffron/10 hover:bg-saffron/20"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-600 hover:text-saffron transition duration-300 text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
