/* eslint-disable @next/next/no-img-element */
// components/ProfileHeader.tsx

import { Tooltip } from "@mui/material";

type Props = {
  banner?: string;
  profile?: string;
  name?: string;
  post?: string;
  improvised?: boolean;
  location?: string;
};

export default function ProfileHeader({
  banner,
  post,
  profile,
  name,
  improvised,
  location,
}: Props) {
  // If any required data is missing, show fallback
  if (!banner || !profile || !name || !post || !location) {
    return (
      <div className="bg-white mb-4 rounded-lg shadow-md overflow-hidden flex items-center justify-center h-40">
        <span className="text-gray-500 text-lg">No Data</span>
      </div>
    );
  }

  return (
    <div className="bg-white mb-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          width={1200}
          height={300}
          className="w-full h-40 object-cover"
        />
        <div className="absolute left-4 -bottom-12">
          <img
            src={profile}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

      <div className="pt-16 px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p
              className={`text-sm ${
                improvised ? "text-green-600" : "text-gray-600"
              }`}
            >
              {post}{" "}
              {improvised && (
                <Tooltip title="Copy to Clipboard">
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center text-gray-400 hover:text-green-700"
                    onClick={() => {
                      navigator.clipboard.writeText(post);
                      import("react-toastify").then(({ toast }) =>
                        toast.success("Copied to clipboard!")
                      );
                    }}
                    aria-label="Copy to clipboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </button>
                </Tooltip>
              )}
            </p>
            <p className="text-sm text-gray-500">
              {location} · <a className="text-blue-600">Contact info</a>
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="btn-primary">Open to</button>
          <button className="btn-outline">Add profile section</button>
          <button className="btn-outline">Enhance profile</button>
          <button className="btn-ghost border">Resources</button>
        </div>
      </div>
    </div>
  );
}
