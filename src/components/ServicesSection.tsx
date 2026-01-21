import { motion } from "framer-motion";
import { Microscope, Sun, Home, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Disease Diagnosis",
    description:
      "Advanced laboratory diagnostics and disease identification to protect your flock from health threats.",
  },
  {
    icon: Sun,
    title: "Biosecurity Planning",
    description:
      "Comprehensive biosecurity protocols tailored to your farm's specific needs and risks.",
  },
  {
    icon: Home,
    title: "Farm Management",
    description:
      "Expert guidance on housing, ventilation, nutrition, and overall farm operations for optimal productivity.",
  },
  {
    icon: Users,
    title: "Staff Training",
    description:
      "Professional training programs for your team on best practices in poultry health management.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "Data-driven strategies to improve flock performance, reduce mortality, and increase profits.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="section-padding bg-background relative overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background accents */}
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-emerald/5 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div variants={container} className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            className="badge-gold mb-4 inline-block animate-glow-pulse"
          >
            Our Expertise
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest mb-4 "
          >
            Professional Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Comprehensive poultry consulting services designed to optimize your
            farm's health and profitability.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative glass-enhanced p-8 hover-lift-glow cursor-default"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl glass-enhanced-dark flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/30">
                  <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-gold transition-colors duration-300" />
                </div>
              </div>

              {/* Text */}
              <div className="relative">
                <h3 className="text-xl font-heading font-semibold text-forest mb-3 group-hover:text-gold-dark transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 right-6"
              >
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold animate-glow-pulse">
                  <svg
                    className="w-5 h-5 text-forest"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
