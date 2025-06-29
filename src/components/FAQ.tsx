import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <span className="text-blue-600 text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-sm text-gray-700"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
