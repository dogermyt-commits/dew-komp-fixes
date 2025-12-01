import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Minimum 1 second loading time
    const minLoadTime = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Check if page is fully loaded
    const handleLoad = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      }
    };

    if (document.readyState === "complete") {
      setTimeout(() => setIsLoaded(true), 1000);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Small delay for fade out animation
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div 
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary animate-spin" 
          style={{ animationDuration: '1.2s' }} 
        />
        
        {/* Middle rotating ring - opposite direction */}
        <div 
          className="absolute top-2 left-2 right-2 bottom-2 rounded-full border-[3px] border-transparent border-b-accent border-l-accent" 
          style={{ 
            animation: 'spin 1.8s linear infinite reverse'
          }} 
        />
        
        {/* Inner glow effect */}
        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm animate-pulse" />
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Cpu className="w-10 h-10 text-primary animate-pulse" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-12">
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Ładowanie...
        </p>
      </div>
    </div>
  );
};
