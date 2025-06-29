import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  {
    title: "Profile Completeness",
    value: "25/30",
    text: `• Includes About, Experience, Education, Skills, and Contact Info
• No sections left blank or generic
• All experiences have descriptions`,
  },
  {
    title: "Professional Quality",
    value: "35/40",
    text: `• Writing clarity, grammar, and tone
• Structured Experience and About sections
• Achievements and roles clearly described and quantified
• Consistency and formatting`,
  },
  {
    title: "Activity Level",
    value: "25/30",
    text: `• Regular posts, shares, articles, or engagement
• Presence of multimedia content (images/videos)
• Active interaction with network`,
  },
];

// Convert value like "25/30" → 83.3
const getPercentage = (valueStr: string): number => {
  const [num, total] = valueStr.split("/").map(Number);
  return Math.round((num / total) * 100);
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

export default function DMainContent() {
  const [activeTab, setActiveTab] = useState("Scoring");
  const generalScore = 83;

  const tabClass = (tab: string) =>
    `px-4 py-2 rounded-t-md border-b-2 font-medium ${
      activeTab === tab
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-500 hover:text-blue-600"
    }`;

  return (
    <section className="flex-1 bg-gray-50 p-10 pb-30 overflow-y-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-6 border-b border-gray-300">
          <button onClick={() => setActiveTab("Scoring")} className={tabClass("Scoring")}>
            Scoring
          </button>
          <button onClick={() => setActiveTab("Current")} className={tabClass("Current")}>
            Current LinkedIn Profile
          </button>
          <button onClick={() => setActiveTab("Improvised")} className={tabClass("Improvised")}>
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
              value={generalScore}
              text={`${generalScore}`}
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
            {data.map((item, idx) => {
              const percent = getPercentage(item.value);
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${getColorClass(percent)} bg-white shadow-sm`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>

                  {/* Circular Progress */}
                  <div className="w-20 mb-3">
                    <CircularProgressbar
                      value={percent}
                      text={`${item.value}`}
                      strokeWidth={10}
                      styles={buildStyles({
                        textColor: "#111827",
                        pathColor: getProgressColor(percent),
                        trailColor: "#f3f4f6",
                        textSize: "18px",
                      })}
                    />
                  </div>

                  {/* Description */}
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">{item.text}</pre>
                </div>
              );
            })}
          </div>

          {/* Faults in Profile */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Detected Faults in Your Profile</h3>
            <ul className="list-disc list-inside text-sm text-red-500 space-y-1">
              <li>No summary in the "About" section</li>
              <li>Missing descriptions in 2 past experiences</li>
              <li>No contact email or website added</li>
            </ul>
          </div>

          {/* Suggestions for Improvement */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Suggestions to Improve Your Profile</h3>
            <ul className="list-disc list-inside text-sm text-blue-500 space-y-1">
              <li>Add a featured section to highlight key work</li>
              <li>Include more quantifiable achievements in experience</li>
              <li>Update your skills section with at least 5 relevant skills</li>
            </ul>
          </div>
        </>
      )}

      {activeTab === "Current" && (
        <div className="text-gray-600 text-center mt-10">
          <p>This will render the current LinkedIn profile preview (coming soon).</p>
        </div>
      )}

      {activeTab === "Improvised" && (
        <div className="text-gray-600 text-center mt-10">
          <p>This will render the improved LinkedIn profile with AI suggestions (coming soon).</p>
        </div>
      )}
    </section>
  );
}
