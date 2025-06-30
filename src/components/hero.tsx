/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { apiResponseKeyName, profileURLKeyName } from "@/utils";
import { useAnimation, motion } from "framer-motion";
import { AIResponse } from "@/types/linkedin";
import { AnimatePresence, motion as m } from "framer-motion";

const successQuotes = [
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do. – Anonymous",
];

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

  const [profileURL, setprofileURL] = useState("");
  const [aiResponse, setaiResponse] = useState<AIResponse | null>(null);

  useEffect(() => {
    const url = sessionStorage.getItem(profileURLKeyName);
    const jsonData = sessionStorage.getItem(apiResponseKeyName);

    if (!url || !jsonData) {
      toast.error("No data found. Please analyze your profile again.");
      router.push("/");
      return;
    }

    try {
      const parsed = JSON.parse(jsonData);

      // Check for score or if all fields are empty
      const score = parsed?.data?.totalScore || "";
      const isEmpty =
        !score ||
        (score ?? "").toString().startsWith("0") ||
        Object.values(parsed.data.optimizedLinkedinProfile || {}).every(
          (v) => v === "" || (Array.isArray(v) && v.length === 0)
        );

      if (isEmpty) {
        throw new Error("Empty or incomplete profile analysis.");
      }

      setprofileURL(url);
      setaiResponse(parsed);
    } catch (err: any) {
      console.error("❌ Dashboard Load Error:", err.message);
      toast.error("Profile analysis is invalid or incomplete.");
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      setloader(true);

      const res = await fetch(
        "http://localhost:5000/api/analyze/analyzeProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ profileUrl: data.profileUrl }),
        }
      );

      let errorMessage = "Server error";

      if (!res.ok) {
        try {
          const errorData = await res.json();
          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch (er) {
          console.log(er);
          // JSON parse failed, keep default message
        }

        toast.error(`Failed: ${errorMessage}`);
        console.error("❌ Server responded with error:", errorMessage);
        return; // DO NOT throw — just return
      }

      let json;
      try {
        json = await res.json();
      } catch (e) {
        toast.error("Invalid JSON response from server.");
        console.error("❌ JSON parse error:", e);
        return;
      }

      const responseData = json.data;
      if (!responseData) {
        toast.error("Invalid response format from server.");
        return;
      }

      toast.success("Profile analyzed successfully!");
      sessionStorage.setItem(
        apiResponseKeyName,
        JSON.stringify({ data: responseData })
      );
      sessionStorage.setItem(profileURLKeyName, data.profileUrl);

      setTimeout(() => {
        router.push("/Dashboard");
      }, 2000);
    } catch (error: any) {
      toast.error(`Unexpected error: ${error.message || "Unknown"}`);
      console.error("⚠️ Unexpected Fetch Error:", error);
    } finally {
      setloader(false);
    }
  };

  const controls = useAnimation();

  const [quoteIdx, setQuoteIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!loader) return;
    setDisplayed("");
    let charIdx = 0;
    const quote = successQuotes[quoteIdx];
    const typeInterval = setInterval(() => {
      setDisplayed((prev) => prev + quote[charIdx]);
      charIdx++;
      if (charIdx >= quote.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setQuoteIdx((prev) => (prev + 1) % successQuotes.length);
        }, 2000);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, [quoteIdx, loader]);

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

        {loader && (
          <div>
            <p>Read Quotes while we are fetching data for you</p>

            <AnimatePresence mode="wait">
              <m.p
                key={quoteIdx}
                className="text-blue-700 font-semibold text-lg mt-2 min-h-[60px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {displayed}
                <span className="animate-pulse">|</span>
              </m.p>
            </AnimatePresence>
          </div>
        )}
        <h4 className="font-bold text-red-500">
          Scan 5 profiles completely for free
        </h4>
        {profileURL && aiResponse && (
          <div>
            <p>Edit Saved Profile</p>
            <a className="text-blue-500 underline" href={"/Dashboard"}>
              {profileURL}
            </a>
          </div>
        )}
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
