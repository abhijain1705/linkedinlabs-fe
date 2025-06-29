import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  profileUrl: string;
};

const Hero: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Profile URL Submitted:", data.profileUrl);
    // You can call an API or navigate based on URL here
  };

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
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black mb-4">
        <span className="block text-gray-400 text-3xl sm:text-5xl">The #1</span>
        <span className="text-[#1475b1]">LinkedIn Profile Optimizer</span>
      </h1>

      <p className="text-gray-500 max-w-xl mb-6 text-lg sm:text-xl">
        Modern, powerful, affordable platform to optimize your LinkedIn profile
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8"
      >
        <input
          type="text"
          placeholder="Enter LinkedIn Profile URL"
          {...register("profileUrl", {
            required: "Profile URL is required",
            pattern: {
              value: /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_]+\/?$/,
              message: "Enter a valid LinkedIn profile URL",
            },
          })}
          className={`px-4 py-3 border ${
            errors.profileUrl ? "border-red-500" : "border-black"
          } rounded-md shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-2 focus:ring-black`}
        />

        <button
          type="submit"
          id="analyze-button"
          className="bg-white border-2 border-black text-black px-6 py-3 rounded-md font-semibold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#fff] transition-transform duration-100"
        >
          Analyze
        </button>
      </form>

      {errors.profileUrl && (
        <p className="mt-2 text-red-500 text-sm">{errors.profileUrl.message}</p>
      )}
    </section>
    </section>
  );
};

export default Hero;
