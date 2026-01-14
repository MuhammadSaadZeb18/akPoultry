import { useEffect, useState } from "react";

interface HenPosition {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  speed: number;
  direction: 1 | -1;
  opacity: number;
}

const FloatingHens = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hens, setHens] = useState<HenPosition[]>([]);

  useEffect(() => {
    // Generate random hen positions
    const generatedHens: HenPosition[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 15 + Math.random() * 70, // Spread across 15-85% of page height
      scale: 0.3 + Math.random() * 0.4,
      rotation: -15 + Math.random() * 30,
      speed: 0.02 + Math.random() * 0.03,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: 0.08 + Math.random() * 0.12,
    }));
    setHens(generatedHens);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hens.map((hen) => {
        const parallaxOffset = scrollY * hen.speed * hen.direction;
        const horizontalMove = Math.sin(scrollY * 0.002 + hen.id) * 20;
        
        return (
          <div
            key={hen.id}
            className="absolute transition-transform duration-300 ease-out"
            style={{
              left: `${hen.x}%`,
              top: `${hen.y}%`,
              transform: `
                translateY(${parallaxOffset}px) 
                translateX(${horizontalMove}px)
                rotate(${hen.rotation + Math.sin(scrollY * 0.003) * 5}deg) 
                scale(${hen.scale})
                scaleX(${hen.direction})
              `,
              opacity: hen.opacity,
            }}
          >
            {/* Stylized Hen SVG */}
            <svg
              width="120"
              height="100"
              viewBox="0 0 120 100"
              fill="none"
              className="text-forest"
            >
              {/* Body */}
              <ellipse cx="60" cy="60" rx="40" ry="30" fill="currentColor" />
              {/* Head */}
              <circle cx="90" cy="40" r="18" fill="currentColor" />
              {/* Beak */}
              <polygon points="108,40 120,43 108,46" fill="hsl(43 96% 56%)" />
              {/* Comb */}
              <path
                d="M85 22 C87 18, 90 15, 92 18 C94 15, 97 15, 98 20 C100 16, 103 18, 102 25"
                fill="hsl(0 70% 50%)"
              />
              {/* Eye */}
              <circle cx="95" cy="38" r="3" fill="white" />
              <circle cx="96" cy="38" r="1.5" fill="black" />
              {/* Tail */}
              <path
                d="M20 45 Q5 30, 15 55 Q5 50, 18 65"
                stroke="currentColor"
                strokeWidth="4"
                fill="currentColor"
              />
              {/* Legs */}
              <line x1="50" y1="85" x2="45" y2="100" stroke="hsl(43 80% 50%)" strokeWidth="3" />
              <line x1="70" y1="85" x2="75" y2="100" stroke="hsl(43 80% 50%)" strokeWidth="3" />
              {/* Wing */}
              <ellipse cx="55" cy="55" rx="20" ry="15" fill="hsl(142 55% 25%)" opacity="0.5" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHens;
