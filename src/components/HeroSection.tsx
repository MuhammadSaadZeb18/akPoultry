import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { CheckCircle, TrendingUp, Shield, Phone } from "lucide-react";
import { motion } from "framer-motion";

// framer motion animationss
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "0% 50%",
            "50% 100%",
            "100% 50%",
            "50% 0%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7), rgba(6,78,59,0.85), rgba(0,0,0,0.8))",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* Logo */}
          <motion.div variants={item} className="flex items-center gap-4 mb-6">
            <motion.img
              src={logo}
              alt="AK Poultry Consultant"
              className="w-16 h-16 rounded-xl bg-white/10 p-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-gold font-semibold tracking-wide">
              AK Poultry Consultant
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Science-Driven <br />
            <span className="text-gold">Poultry Health & Profit Growth</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-xl text-white/80 max-w-xl mb-8"
          >
            Expert veterinary microbiologist helping poultry farms reduce
            mortality, prevent disease outbreaks, and maximize production
            efficiency.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded-xl"
            >
              <Phone size={18} />
              Book Consultation
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-white/30 text-white rounded-xl hover:bg-white/10 transition"
            >
              View Services
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
