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
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-3 border-transparent border-t-primary border-r-primary animate-spin" 
                 style={{ animationDuration: '1s' }} />
            
            {/* Middle rotating ring - opposite direction */}
            <div className="absolute inset-1.5 w-13 h-13 rounded-full border-3 border-transparent border-b-accent border-l-accent animate-spin" 
                 style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
            
            {/* Inner glow effect */}
            <div className="absolute inset-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-md animate-pulse" />
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
