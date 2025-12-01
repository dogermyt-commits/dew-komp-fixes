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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" 
             style={{ animationDuration: '1.5s' }} />
        
        {/* Middle rotating ring - opposite direction */}
        <div className="absolute inset-2 w-20 h-20 rounded-full border-4 border-transparent border-b-accent border-l-accent animate-spin" 
             style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        
        {/* Inner glow effect */}
        <div className="absolute inset-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-md animate-pulse" />
        
        {/* Center icon */}
        <div className="absolute inset-0 w-24 h-24 flex items-center justify-center">
          <Cpu className="w-10 h-10 text-primary animate-pulse" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-32 text-center">
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Ładowanie...
        </p>
      </div>
    </div>
  );
};
