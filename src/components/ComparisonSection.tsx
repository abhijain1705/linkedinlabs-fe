import { motion } from "framer-motion";
import {
  FaClock,
  FaTools,
  FaFileAlt,
  FaThumbsUp,
  FaCheckCircle,
} from "react-icons/fa";


const items = [
  {
    title: "Rejection",
    desc: "Non-compliant resumes lead to rejections",
    icon: <FaFileAlt className="text-red-500 text-xl" />,
    color: "border-red-300 bg-red-50",
  },
  {
    title: "Time Wasted",
    desc: "Job searching is a time-consuming task",
    icon: <FaClock className="text-red-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
  {
    title: "Fragmented Tools",
    desc: "Switching between multiple tools is stressful",
    icon: <FaTools className="text-red-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
];

const solutions = [
  {
    title: "No More Rejections",
    desc: "Instantly create ATS-friendly resumes",
    icon: <FaThumbsUp className="text-green-500 text-xl" />,
    color: "border-green-300 bg-green-50",
  },
  {
    title: "Save Time",
    desc: "Careerflow's AI tools simplify your job search",
    icon: <FaClock className="text-green-400 text-xl" />,
    color: "border-gray-300 bg-white",
  },
  {
    title: "All in One Solution",
    desc: "Manage your entire job search in one platform",
    icon: <FaCheckCircle className="text-green-400 text-xl" />,
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
