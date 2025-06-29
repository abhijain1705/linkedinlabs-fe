import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="text-xl font-semibold mb-3">LinkedIn Labs</h4>
        <p className="text-sm mb-4 text-gray-300">
          AI-powered insights and rewrites to help you perfect your LinkedIn
          profile and unlock new career opportunities.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="text-xs mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} LinkedIn Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
