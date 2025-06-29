import { motion } from "framer-motion";
import {
  FaUserSlash,
  FaRegFileAlt,
  FaPuzzlePiece,
  FaChartLine,
  FaLightbulb,
  FaMagic,
} from "react-icons/fa";

const items = [
  {
    title: "Incomplete Profiles",
    desc: "Missing summaries or vague job descriptions lead to missed opportunities.",
    icon: <FaUserSlash className="text-red-500 text-xl" />,
    color: "border-red-300 bg-red-50",
  },
  {
    title: "Generic Summaries",
    desc: "Copy-paste About sections don’t stand out to recruiters.",
    icon: <FaRegFileAlt className="text-red-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
  {
    title: "Confusing Optimization",
    desc: "No clear guidance on how to improve your LinkedIn profile.",
    icon: <FaPuzzlePiece className="text-red-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
];

const solutions = [
  {
    title: "Section-Wise AI Scoring",
    desc: "Each section is scored to show you where you shine—and where to improve.",
    icon: <FaChartLine className="text-green-500 text-xl" />,
    color: "border-green-300 bg-green-50",
  },
  {
    title: "Personalized Feedback",
    desc: "Get AI-powered comments tailored to your profile’s strengths and gaps.",
    icon: <FaLightbulb className="text-green-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
  {
    title: "One-Click Rewrite",
    desc: "Regenerate About and Experience with role-specific improvements.",
    icon: <FaMagic className="text-green-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* BEFORE */}
        <div className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className={`rounded-lg border ${item.color} p-4 shadow-sm flex gap-3`}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ARROW */}
        <div className="hidden md:flex justify-center">
          <span className="text-4xl text-gray-400">→</span>
        </div>

        {/* AFTER */}
        <div className="flex flex-col gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className={`rounded-lg border ${item.color} p-4 shadow-sm flex gap-3`}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
