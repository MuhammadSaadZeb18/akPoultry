import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-profile.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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
      className="section-padding bg-muted"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* CONTAINER */}
      <div className="section-container flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* IMAGE COLUMN (fixed width) */}
        <motion.div
          variants={fadeLeft}
          className="relative flex justify-center  lg:justify-start lg:w-[420px] flex-shrink-0"
        >
          {/* Background accent */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />

          {/* Image */}
          <div className="relative">
            <motion.img
              src={doctorImage}
              alt="Dr. AK"
              className="w-72 md:w-80 lg:w-96 rounded-2xl object-cover shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: false }}
              className="absolute -bottom-4 -left-4 bg-gold text-forest font-bold px-5 py-3 rounded-xl shadow-lg"
            >
              16+ Years Experience
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT COLUMN (flex-grow) */}
        <motion.div variants={fadeRight} className="flex-1">
          {/* Availability */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Available for Consultation
          </motion.div>

          {/* Name */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest mb-3"
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
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            With over 16 years of distinguished leadership in the poultry
            industry, Dr. AK brings unparalleled expertise in veterinary
            microbiology, disease prevention, and biosecurity protocols. His
            comprehensive approach has helped hundreds of farms achieve optimal
            health standards and maximize profitability.
          </motion.p>

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {[
              "Poultry Health",
              "Disease Prevention",
              "Biosecurity",
              "Farm Management",
              "Veterinary Microbiology",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-md border border-forest/15 text-forest text-sm font-medium hover:bg-forest/5 transition"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DoctorProfile;
