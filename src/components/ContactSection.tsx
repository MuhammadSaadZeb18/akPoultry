import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    detail: "Available for on-site consultations nationwide",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "ak.poulrtyconsultant@gmail.com",
  },
  {
    icon: Clock,
    title: "Availability",
    detail: "Monday - Saturday, 9:00 AM - 6:00 PM",
  },
];

const ContactSection = () => {
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
      id="contact"
      className="section-padding bg-muted relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-gold/10 blur-2xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-emerald/10 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-gold mb-4 inline-block animate-glow-pulse">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to improve your poultry operation? Let's discuss how we can
            help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`flex items-start gap-4 p-6 glass-enhanced hover-lift-glow cursor-default ${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 rounded-xl glass-enhanced-dark flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Card */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div
              className="h-full rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center glass-enhanced-dark hover-scale-glow"
              style={{
                background:
                  "linear-gradient(135deg, hsl(142 55% 18% / 0.9) 0%, hsl(142 60% 12% / 0.95) 100%)",
              }}
            >
              {/* Pulse Animation Background */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-full bg-gold/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                <div className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-gold animate-glow-pulse">
                  <Phone className="w-8 h-8 text-forest" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
                Call or WhatsApp
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                For immediate consultation and emergency support
              </p>

              <a
                href="tel:+919876543210"
                className="btn-gold text-lg hover:scale-105 transition-transform duration-300"
              >
                +91 98765 43210
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-all duration-300 glass-enhanced px-4 py-2 rounded-full hover-glow"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
