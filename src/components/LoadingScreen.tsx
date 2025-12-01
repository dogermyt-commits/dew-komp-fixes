import { useEffect, useState } from "react";

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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        {/* Spinning loader with gradient */}
        <div className="w-16 h-16 rounded-full animate-spin relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, hsl(142, 76%, 36%), hsl(199, 89%, 48%), transparent)",
            }}
          />
          <div className="absolute inset-1 rounded-full bg-background" />
        </div>
      </div>
    </div>
  );
};
