import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Phone, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen pb-[4rem] flex items-center justify-center overflow-hidden text-center"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: bgY,
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.88), rgba(6,78,59,0.85), rgba(0,0,0,0.88))",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-6"
      >
        {/* Logo */}
        <div className="flex flex-col justify-center items-center gap-3 mb-4">
          <img
            src={logo}
            alt="AK Poultry Consultant"
            className="w-40 h-40 object-contain rounded-xl bg-white/10 p-2 animate-bounce"
          />
          <span className="text-gold  font-semibold tracking-wide ">
            AK Poultry Consultant
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Science-Driven <br />
          <span className="text-gold">Poultry Health & Profit Growth</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-10">
          Expert veterinary microbiologist helping poultry farms reduce
          mortality, prevent disease outbreaks, and maximize production
          efficiency.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              boxShadow: "0 20px 40px rgba(212,175,55,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-10 py-4 bg-gold text-black hover:animate-bounce font-semibold rounded-full  transition-all duration-200"
          >
            <Phone size={18} />
            Book Consultation
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#services"
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white  backdrop-blur  rounded-full hover:animate-bounce transition-all duration-300"
          >
            View Services
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 text-white/50 text-sm"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;
