import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "16+",
    label: "Years Experience",
  },
  {
    value: "500+",
    label: "Farms Consulted",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "1M+",
    label: "Birds Protected",
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(160 84% 39%) 0%, hsl(142 55% 18%) 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-gold/10 blur-2xl animate-float" />
      <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-emerald/10 blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Trusted by Farmers
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Our track record speaks for itself. Join hundreds of successful poultry operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`glass-enhanced-dark p-8 md:p-12 hover-scale-glow ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`stat-item group cursor-default ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <div className="stat-value group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="stat-label group-hover:text-gold transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          {["Certified Professional", "Industry Expert", "ISO Compliant"].map((badge, index) => (
            <div 
              key={badge}
              className="flex items-center gap-2 text-primary-foreground/80 glass-enhanced px-4 py-2 rounded-full hover-glow transition-all duration-300 hover:text-gold cursor-default"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
