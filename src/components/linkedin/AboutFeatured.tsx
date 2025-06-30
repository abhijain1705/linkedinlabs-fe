// components/AboutFeatured.tsx
import { Tooltip } from "@mui/material";

type Props = { about: string; improvised: boolean };
export default function AboutFeatured({ about, improvised }: Props) {
  // Fallback if about is missing or empty
  const displayAbout = about && about.trim().length > 0 ? about : "No Data";

  return (
    <div className="space-y-4">
      {/* About */}
      <div className="bg-white mt-4 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">
          About{" "}
          {improvised && (
            <Tooltip title="Copy to Clipboard">
              <button
                type="button"
                className="ml-2 inline-flex items-center text-gray-400 hover:text-green-700"
                onClick={() => {
                  navigator.clipboard.writeText(displayAbout);
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
        </h3>
        <p
          className={`text-sm ${
            improvised ? "text-green-700" : "text-gray-700"
          } mt-1`}
        >
          {displayAbout}
        </p>
      </div>

      {/* Featured */}
      {/* <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Featured</h3>
        <div className="border p-4 rounded-lg flex items-center gap-4 bg-gray-50 mt-2">
          <img
            src="/resume-thumbnail.png"
            alt="resume"
            className="w-32 h-20 object-cover"
          />
          <div>
            <p className="font-semibold">Hire me</p>
            <p className="text-sm text-gray-600">
              This is my resume for a Full Stack Developer
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
