import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { apiResponseKeyName, profileURLKeyName } from "@/utils";
import { useAnimation, motion } from "framer-motion";

type FormValues = {
  profileUrl: string;
};

const Hero: React.FC = () => {
  const router = useRouter();

  const [loader, setloader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setloader(true);
      const response = await axios.post(
        "http://localhost:5000/api/analyze/analyzeProfile",
        {
          profileUrl: data.profileUrl,
        }
      );
      toast.success("Profile analyzed successfully!");
      sessionStorage.setItem(apiResponseKeyName, JSON.stringify(response.data));
      sessionStorage.setItem(profileURLKeyName, data.profileUrl);
      setTimeout(() => {
        router.push("/Dashboard");
      }, 2000);
      // Handle response (e.g., show results or navigate)
    } catch (error) {
      toast.error("Failed to analyze profile. Please try again.");
      console.error("API Error:", error);
      // Handle error (e.g., show error message)
    } finally {
      setloader(false);
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      d: [
        // Path 1
        "M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,96C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        // Path 2
        "M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,218.7C672,235,768,245,864,240C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        // Loop back to Path 1
        "M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,96C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
      ],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 🌊 Top Moving Wave */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-40 sm:h-64 z-0"
        preserveAspectRatio="none"
      >
        <motion.path fill="#e0f4ff" initial={false} animate={controls} />
      </svg>

      {/* 💬 Content */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black mb-4">
          <span className="block text-gray-400 text-3xl sm:text-5xl">
            The #1
          </span>
          <span className="text-[#1475b1]">LinkedIn Profile Optimizer</span>
        </h1>

        <p className="text-gray-500 max-w-xl mb-6 text-lg sm:text-xl">
          Modern, powerful, affordable platform to optimize your LinkedIn
          profile
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
                value:
                  /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_]+\/?$/,
                message: "Enter a valid LinkedIn profile URL",
              },
            })}
            className={`px-4 py-3 border ${
              errors.profileUrl ? "border-red-500" : "border-black"
            } rounded-md shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-2 focus:ring-black`}
          />

          <button
            type="submit"
            disabled={loader}
            className="bg-white border-2 border-black text-black px-6 py-3 rounded-md font-semibold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#fff] transition-transform duration-100"
          >
            {loader ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {errors.profileUrl && (
          <p className="mt-2 text-red-500 text-sm">
            {errors.profileUrl.message}
          </p>
        )}
      </section>

      {/* 🌊 Bottom Moving Wave */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-40 sm:h-64 rotate-180 z-0"
        preserveAspectRatio="none"
      >
        <motion.path fill="#e0f4ff" initial={false} animate={controls} />
      </svg>
    </section>
  );
};

export default Hero;
