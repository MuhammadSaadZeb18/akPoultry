import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-forest py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-gold/5 blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-emerald/5 blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-14 h-14 rounded-full glass-enhanced p-1 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={logo} 
                alt="AK Poultry Consultant Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-semibold text-primary-foreground text-lg group-hover:text-gold transition-colors duration-300">
              AK Poultry Consultant
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-gold transition-all duration-300 text-sm relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} AK Poultry Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
