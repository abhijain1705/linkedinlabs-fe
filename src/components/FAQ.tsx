import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // 👈 Import the dropdown icon

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is LinkedIn Labs?",
    answer:
      "LinkedIn Labs is an AI-powered platform that analyzes your LinkedIn profile, gives you a detailed score, and provides personalized feedback to help you stand out.",
  },
  {
    question: "How do I use LinkedIn Labs?",
    answer:
      "Simply paste your public LinkedIn profile link into our platform. Our AI will instantly review your profile and generate a performance score, section-wise feedback, and improvement suggestions.",
  },
  {
    question: "Is LinkedIn Labs free?",
    answer:
      "Yes! You can use our core features for free. We also offer premium features like advanced benchmarking and AI-powered rewrites.",
  },
  {
    question: "What sections of my profile are analyzed?",
    answer:
      "We analyze your Headline, About, Experience, Education, Skills, and more—providing actionable tips for each section.",
  },
  {
    question: "Can LinkedIn Labs rewrite my profile sections?",
    answer:
      "Absolutely! Our AI can suggest and even auto-generate improved versions of your 'About' or 'Experience' sections tailored to your career goals.",
  },
  {
    question: "Is my LinkedIn data secure?",
    answer:
      "Yes, your privacy is our priority. We use secure encryption and never share your data with third parties.",
  },
  {
    question: "How is LinkedIn Labs different from other tools?",
    answer:
      "Unlike generic profile checkers, we offer detailed scoring, industry benchmarking, AI-powered rewrites, and progress tracking—all in one platform.",
  },
  {
    question: "Can I track my profile improvements over time?",
    answer:
      "Yes! You can monitor your profile score and see how your changes impact your visibility and career readiness.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="relative z-0 py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-sm text-gray-700"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
