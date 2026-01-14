import { motion } from "framer-motion";

const stats = [
  { value: "16+", label: "Years Experience" },
  { value: "500+", label: "Farms Consulted" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1M+", label: "Birds Protected" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const StatsSection = () => {
  return (
    <motion.section
      id="stats"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(160 84% 39%) 0%, hsl(142 55% 18%) 100%)",
      }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating accents */}
      <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-gold/10 blur-2xl animate-float" />
      <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-emerald/10 blur-2xl animate-float animation-delay-600" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div variants={container} className="text-center mb-16">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Trusted by Farmers
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Our track record speaks for itself. Join hundreds of successful
            poultry operations.
          </motion.p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={fadeUp}
          className="glass-enhanced-dark p-8 md:p-12 hover-scale-glow"
        >
          <motion.div
            variants={container}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="stat-item cursor-default"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={container}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {["Certified Professional", "Industry Expert", "ISO Compliant"].map(
            (badge) => (
              <motion.div
                key={badge}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex items-center gap-2 text-primary-foreground/80 glass-enhanced px-4 py-2 rounded-full hover-glow cursor-default"
              >
                <svg
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
