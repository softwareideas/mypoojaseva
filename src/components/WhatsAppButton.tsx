import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "918608765113";
  const defaultMessage = "Hello, I'm interested in booking a pooja service.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;

