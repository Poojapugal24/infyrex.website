import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center z-50 opacity-0 transition-opacity duration-300 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="text-center animate-pulse">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          INFYREX
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          Your Tech Partner
        </p>
        <div className="mt-8 w-16 h-1 bg-white/60 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default SplashScreen;