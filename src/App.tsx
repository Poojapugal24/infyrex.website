import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Request from "./pages/Request";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle favicon on all routes
const FaviconHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Force favicon update on route change
    const updateFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      const shortcut = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
      
      if (favicon) {
        // Add timestamp to bust cache
        const timestamp = new Date().getTime();
        const href = favicon.href.split('?')[0];
        favicon.href = `${href}?t=${timestamp}`;
      }
      
      if (shortcut) {
        const timestamp = new Date().getTime();
        const href = shortcut.href.split('?')[0];
        shortcut.href = `${href}?t=${timestamp}`;
      }
    };
    
    updateFavicon();
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FaviconHandler />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/request" element={<Request />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;