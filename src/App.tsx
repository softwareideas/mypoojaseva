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
import OtpLogin from "./pages/OtpLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services-old" element={<Services />} />
          <Route path="/pooja/:id" element={<PoojaDetail />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/otp-login" element={<OtpLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
