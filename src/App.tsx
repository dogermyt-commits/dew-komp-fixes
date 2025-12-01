import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CustomOffer from "./pages/CustomOffer";
import Terms from "./pages/Terms";
import LogoTool from "./pages/LogoTool";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isNavigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="relative w-16 h-16">
            {/* Outer rotating ring */}
            <div 
              className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary animate-spin" 
              style={{ animationDuration: '0.8s' }} 
            />
            
            {/* Middle rotating ring - opposite direction */}
            <div 
              className="absolute top-1 left-1 right-1 bottom-1 rounded-full border-[3px] border-transparent border-b-accent border-l-accent" 
              style={{ animation: 'spin 1.2s linear infinite reverse' }} 
            />
            
            {/* Inner glow effect */}
            <div className="absolute top-2 left-2 right-2 bottom-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm animate-pulse" />
          </div>
        </div>
      )}
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-offer" element={<CustomOffer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/logo-tool" element={<LogoTool />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
