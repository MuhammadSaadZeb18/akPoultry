import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-profile.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DoctorProfile = () => {
  return (
    <motion.section
      id="doctor"
      className="section-padding bg-muted relative overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(142 55% 18%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* MAIN GLASS CARD */}
        <motion.div
          variants={container}
          className="glass-enhanced hover-scale-glow p-8 md:p-12 lg:p-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* IMAGE BLOCK */}
            <motion.div variants={fadeUp} className="relative flex-shrink-0">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold to-emerald opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

                {/* Border ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />

                {/* Image */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-foreground shadow-lg">
                  <img
                    src={doctorImage}
                    alt="Dr. AK - PhD Veterinary Microbiologist"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 -right-2 bg-gold text-forest font-bold px-4 py-2 rounded-full shadow-gold animate-glow-pulse"
                >
                  16+ Years
                </motion.div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={container}
              className="flex-1 text-center lg:text-left"
            >
              {/* Availability */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full glass-enhanced-dark px-4 py-2 mb-4 hover-glow"
              >
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground">
                  Available for Consultation
                </span>
              </motion.div>

              {/* Name */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest mb-2"
              >
                Dr. AK
              </motion.h2>

              {/* Title */}
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-gold-dark font-semibold mb-6"
              >
                PhD Veterinary Microbiologist & Poultry Consultant
              </motion.p>

              {/* Bio */}
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                With over 16 years of distinguished leadership in the poultry
                industry, Dr. AK brings unparalleled expertise in veterinary
                microbiology, disease prevention, and biosecurity protocols. His
                comprehensive approach to farm management has helped hundreds of
                poultry operations achieve optimal health standards and maximize
                profitability.
              </motion.p>

              {/* Expertise Tags */}
              <motion.div
                variants={container}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  "Poultry Health",
                  "Disease Prevention",
                  "Biosecurity",
                  "Farm Management",
                  "Veterinary Microbiology",
                ].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    className="px-4 py-2 rounded-full glass-enhanced text-forest text-sm font-medium hover-glow cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DoctorProfile;
