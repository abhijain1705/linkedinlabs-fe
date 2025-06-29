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

const features = [
  {
    title: "Paste LinkedIn Profile URL",
    description: "Paste a LinkedIn URL to simulate scraping and view a mock profile instantly.",
    icon: "🔗",
  },
  {
    title: "AI-Powered Profile Analysis",
    description: "Analyzes headline, about, experience, and skills with industry alignment.",
    icon: "🧠",
  },
  {
    title: "Section-Wise Scoring System",
    description: "Scores each section individually to highlight profile strengths and weaknesses.",
    icon: "📊",
  },
  {
    title: "Personalized Feedback Engine",
    description: "Gives detailed comments and actionable suggestions for each section.",
    icon: "💡",
  },
  {
    title: "AI Rewriter Assistant",
    description: "One-click rewrites for About, Headline, Experience based on your job role.",
    icon: "✍",
  },
  {
    title: "Mocked Scraping System",
    description: "Safe, realistic simulation of profile loading with no ToS violations.",
    icon: "📌",
  },
  {
    title: "Mobile-First, Clean UI",
    description: "Built with React + Tailwind. Fully responsive with optional dark mode.",
    icon: "📱",
  },
  {
    title: "Modular & Scalable Architecture",
    description: "Easily extendable to PDF import, scraping plugins, and benchmarking.",
    icon: "🔄",
  },
  {
    title: "Preloaded Demo Profiles",
    description: "Switch between mock profiles for roles like SE, PM, Designer, Fresher.",
    icon: "🧪",
  },
];

const CareerResults: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#e9f4ff] to-[#f4faff] py-16 px-4 text-center">
      {/* 🔥 Feature List Section */}
      <div className="mt-10">
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Makes LinkedInLabs Powerful
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md text-left"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-3xl">{feature.icon}</div>
              <h4 className="mt-3 font-semibold text-lg text-blue-700">{feature.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerResults;
