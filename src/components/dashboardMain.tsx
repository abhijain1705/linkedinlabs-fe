import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProfileHeader from "./linkedin/ProfileHeader";
import SuggestionsAnalytics from "./linkedin/SuggestionsAnalytics";
import AboutFeatured from "./linkedin/AboutFeatured";
import Activity from "./linkedin/Activity";
import EducationProjects from "./linkedin/EducationProjects";
import { AIResponse } from "../types/linkedin";
import { CircularProgress } from "@mui/material";
import ExperienceProjects from "./linkedin/ExperienceProjects";
import OptimizeComponent from "./linkedin/optimizeComponent";

// Convert value like "25/30" → 83.3
const getPercentage = (valueStr: string): number => {
  const [num, total] = valueStr.split("/").map(Number);
  return Math.round((num / total) * 100);
};

const decodeCamelCase = (word: string) => {
  return word
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const getColorClass = (percent: number) => {
  if (percent <= 25) return "border-red-400 text-red-600";
  if (percent <= 50) return "border-yellow-400 text-yellow-600";
  if (percent <= 75) return "border-green-400 text-green-600";
  return "border-green-600 text-green-700";
};

const getProgressColor = (percent: number) => {
  if (percent <= 25) return "#ef4444"; // red
  if (percent <= 50) return "#facc15"; // yellow
  if (percent <= 75) return "#4ade80"; // green
  return "#22c55e"; // dark green
};

export default function DMainContent({
  aiResponse,
}: {
  aiResponse: AIResponse;
}) {
  const { data } = aiResponse;
  const [activeTab, setActiveTab] = useState("Scoring");

  const tabClass = (tab: string) =>
    `px-4 py-2 rounded-t-md border-b-2 font-medium ${
      activeTab === tab
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-500 hover:text-blue-600"
    }`;

  if (data === undefined || data === null) {
    return <CircularProgress />;
  }

  return (
    <section className="flex-1 bg-gray-50 p-10 pb-30 overflow-y-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-6 border-b border-gray-300">
          <button
            onClick={() => setActiveTab("Scoring")}
            className={tabClass("Scoring")}
          >
            Scoring
          </button>
          <button
            onClick={() => setActiveTab("Current")}
            className={tabClass("Current")}
          >
            Current LinkedIn Profile
          </button>
          <button
            onClick={() => setActiveTab("Improvised")}
            className={tabClass("Improvised")}
          >
            Improvised LinkedIn Profile
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Scoring" && (
        <>
          <h2 className="text-xl font-bold mb-2">My Overall Score</h2>
          <div className="text-gray-600 text-sm mb-6">
            Your score is calculated
          </div>

          {/* Overall Score Circular Progress */}
          <div className="mb-8 w-24">
            <CircularProgressbar
              value={getPercentage(data.totalScore)}
              text={`${getPercentage(data.totalScore)}%`}
              strokeWidth={10}
              styles={buildStyles({
                textColor: "#111827",
                pathColor: "#facc15",
                trailColor: "#fef9c3",
                textSize: "24px",
              })}
            />
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.scoreBreakdown).map(([key, value], idx) => {
              const percent = getPercentage(value);
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${getColorClass(
                    percent
                  )} bg-white shadow-sm`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{decodeCamelCase(key)}</h4>
                  </div>

                  <div className="w-20 mb-3">
                    <CircularProgressbar
                      value={percent}
                      text={`${value}`}
                      strokeWidth={10}
                      styles={buildStyles({
                        textColor: "#111827",
                        pathColor: getProgressColor(percent),
                        trailColor: "#f3f4f6",
                        textSize: "18px",
                      })}
                    />
                  </div>

                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {decodeCamelCase(key)}
                  </pre>
                </div>
              );
            })}
          </div>

          {/* Faults in Profile */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Detected Faults in Your Profile
            </h3>
            <ul className="list-disc list-inside text-sm text-red-500 space-y-1">
              {data.strengths.map((str, idx) => (
                <li key={idx}>{str}</li>
              ))}
            </ul>
          </div>

          {/* Suggestions for Improvement */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Suggestions to Improve Your Profile
            </h3>
            <ul className="list-disc list-inside text-sm text-blue-500 space-y-1">
              {data.improvements.map((str, idx) => (
                <li key={idx}>{str}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {activeTab === "Current" && (
        <div className="mt-10">
          <ProfileHeader
            profile={data.original.profile_photo}
            post={data.original.headline}
            location={data.original.location}
            improvised={false}
            name={data.original.fullName}
            banner={data.original.background_cover_image_url}
          />
          <SuggestionsAnalytics />
          <AboutFeatured improvised={false} about={data.original.about} />
          <Activity />
          <ExperienceProjects
            improvised={false}
            experience={data.original.experience}
          />
          <EducationProjects
            improvised={false}
            projects={data.original.projects}
            education={data.original.education}
          />
          <OptimizeComponent
            data={{
              awards: data.optimizedLinkedinProfile.awards,
              courses: data.optimizedLinkedinProfile.courses,
              languages: data.optimizedLinkedinProfile.languages,
              certifications: data.optimizedLinkedinProfile.certifications,
              skills: data.optimizedLinkedinProfile.skills,
            }}
          />
        </div>
      )}

      {activeTab === "Improvised" && (
        <div className="mt-10">
          <ProfileHeader
            profile={data.original.profile_photo}
            post={data.optimizedLinkedinProfile.headline}
            improvised={true}
            location={data.original.location}
            name={data.original.fullName}
            banner={data.original.background_cover_image_url}
          />
          <SuggestionsAnalytics />
          <AboutFeatured
            improvised={true}
            about={data.optimizedLinkedinProfile.about}
          />
          {/* <Activity /> */}
          <ExperienceProjects
            improvised={true}
            experience={data.optimizedLinkedinProfile.experience}
          />
          <EducationProjects
            improvised={true}
            projects={data.optimizedLinkedinProfile.projects}
            education={data.optimizedLinkedinProfile.education}
          />
          <OptimizeComponent
            data={{
              awards: data.optimizedLinkedinProfile.awards,
              courses: data.optimizedLinkedinProfile.courses,
              languages: data.optimizedLinkedinProfile.languages,
              certifications: data.optimizedLinkedinProfile.certifications,
              skills: data.optimizedLinkedinProfile.skills,
            }}
          />
        </div>
      )}
    </section>
  );
}
