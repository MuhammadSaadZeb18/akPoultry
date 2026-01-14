import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="flex min-h-screen items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, hsl(142 55% 18%) 0%, hsl(142 60% 12%) 100%)'
      }}
    >
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border border-gold/30">
            <svg 
              className="w-10 h-10 text-gold" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
        <h1 className="mb-4 text-6xl font-heading font-bold text-gold">404</h1>
        <p className="mb-8 text-xl text-primary-foreground/80">Oops! Page not found</p>
        <a href="/" className="btn-gold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
