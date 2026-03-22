import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AllServices from "./pages/AllServices";
import Contact from "./pages/Contact";
import PoojaDetail from "./pages/PoojaDetail";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

// Service Category Pages
import BirthCeremonies from "./pages/services/BirthCeremonies";
import MarriageRituals from "./pages/services/MarriageRituals";
import GrihaPravesh from "./pages/services/GrihaPravesh";
import HomamServices from "./pages/services/HomamServices";
import SpiritualGuidance from "./pages/services/SpiritualGuidance";

// Resource Pages
import RitualGuides from "./pages/resources/RitualGuides";

const queryClient = new QueryClient();

// Use basename only in production (GitHub Pages), not in development
const basename = import.meta.env.MODE === 'production' ? '/mypoojaseva' : '/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services-old" element={<Services />} />
          
          {/* Service Category Routes */}
          <Route path="/services/birth-ceremonies" element={<BirthCeremonies />} />
          <Route path="/services/marriage-rituals" element={<MarriageRituals />} />
          <Route path="/services/griha-pravesh" element={<GrihaPravesh />} />
          <Route path="/services/homam-services" element={<HomamServices />} />
          <Route path="/services/spiritual-guidance" element={<SpiritualGuidance />} />
          
          {/* Resource Routes */}
          <Route path="/resources/ritual-guides" element={<RitualGuides />} />
          
          {/* Dynamic Routes */}
          <Route path="/pooja/:id" element={<PoojaDetail />} />
          <Route path="/booking/:id" element={<Booking />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
