/* eslint-disable @next/next/no-img-element */
import React from "react";

const LinkedInLabsHero: React.FC = () => {
  return (
    <section className="bg-white relative w-full text-center px-4 py-12">
      {/* Decorative Graphic */}
      <div className="support-top-graphics support-adjust-graphics">
        <img
          width="1042"
          sizes="(max-width: 1439px) 100vw, 1042px"
          alt=""
          src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg.webp"
          loading="eager"
          srcSet="https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg-p-500.png 500w, https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg-p-800.png 800w, https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg-p-1080.png 1080w, https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg-p-1600.png 1600w, https://cdn.prod.website-files.com/635c591378332f38be25d45f/674830616e40dac74f0c2dc4_subsection-dots.svg.webp 2084w"
          className="support-top-graphics-pic"
        />
      </div>

      {/* Hero Text */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Say goodbye to <span className="text-blue-600">profile guesswork</span>
        </h1>
        <p className="text-gray-600 text-lg">
          From incomplete LinkedIn profiles to landing more interviews—see how LinkedInLabs transforms your presence
        </p>
      </div>

      {/* BEFORE vs AFTER Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-16 px-4">
        {/* BEFORE CARD */}
        <div className="text-left border border-red-300 rounded-lg p-6">
          <h3 className="text-red-500 font-semibold flex items-center gap-2">
            ❌ BEFORE LINKEDINLABS
          </h3>
          <p className="text-lg font-semibold mt-2">
            Struggling with a weak LinkedIn profile and unclear next steps
          </p>
          <div className="mt-4 bg-red-50 p-4 rounded border border-red-200">
            <h4 className="font-bold text-red-600">Incomplete Profile</h4>
            <p className="text-sm text-red-500">
              Vague summaries, poor experience descriptions, and low visibility
            </p>
          </div>
        </div>

        {/* AFTER CARD */}
        <div className="text-left border border-green-300 rounded-lg p-6">
          <h3 className="text-green-600 font-semibold flex items-center gap-2">
            ✅ AFTER LINKEDINLABS
          </h3>
          <p className="text-lg font-semibold mt-2">
            Stand out with an AI-optimized profile tailored to your role
          </p>
          <div className="mt-4 bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-bold text-green-700">Optimized Profile</h4>
            <p className="text-sm text-green-600">
              Get scoring, feedback, and rewrites to make your profile shine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInLabsHero;
