import HeroSection from "@/components/HeroSection";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingHens from "@/components/FloatingHens";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Floating Hens - Parallax Animation */}
      {/* <FloatingHens /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Doctor Profile Section */}
      <DoctorProfile />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats/Team Section */}
      <StatsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
