import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.4 },
  }),
};

const CareerResults: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#e9f4ff] to-[#f4faff] py-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Real Results for{" "}
        <span className="text-blue-600">Job Seekers Like You</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 mt-3 text-base md:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        More interviews, offers, and a faster path to your next role
      </motion.p>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-xl px-8 py-6 w-full max-w-xs"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={cardVariants}
          >
            {i === 0 && (
              <>
                <h3 className="text-3xl font-bold text-blue-600">500k+</h3>
                <p className="mt-2 text-sm text-gray-700 flex items-center justify-center gap-1">
                  <span role="img" aria-label="briefcase">
                    💼
                  </span>
                  Job Seekers Served
                </p>
              </>
            )}
            {i === 1 && (
              <>
                <h3 className="text-3xl font-bold text-blue-600">60%</h3>
                <p className="mt-2 text-sm text-gray-700 flex items-center justify-center gap-1">
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>
                  Faster time to interviews
                </p>
              </>
            )}
            {i === 2 && (
              <>
                <h3 className="text-3xl font-bold text-blue-600">2x</h3>
                <p className="mt-2 text-sm text-gray-700 flex items-center justify-center gap-1">
                  <span role="img" aria-label="envelope">
                    ✉️
                  </span>
                  More Job Offers
                </p>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-10 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        SIGN UP FOR FREE
      </motion.button>
    </div>
  );
};

export default CareerResults;
