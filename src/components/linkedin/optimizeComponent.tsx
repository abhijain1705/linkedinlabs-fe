import { Tooltip } from "@mui/material";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = { data?: Record<string, any>; improvised: boolean };

export default function OptimizeComponent({ improvised, data }: Props) {
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <p className="text-gray-500 italic">No Data</p>
      </div>
    );
  }

  return (
    <>
      {Object.entries(data).map(([key, value], idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow mt-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold capitalize mb-2">
              {key}{" "}
              {improvised && Array.isArray(value) && value.length > 0 && (
                <Tooltip title="Copy to Clipboard">
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center text-gray-400 hover:text-green-700"
                    onClick={() => {
                      navigator.clipboard.writeText(JSON.stringify(value));
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

            {/* Handle arrays */}
            {Array.isArray(value) && value.length > 0 ? (
              value.map((item: any, i: number) => {
                // If it's a string (e.g., skill or language)
                if (typeof item === "string" || typeof item === "number") {
                  return (
                    <p
                      key={i}
                      className={`${
                        improvised ? "text-green-500" : "text-gray-500"
                      } ml-2`}
                    >
                      • {item}
                    </p>
                  );
                }

                if (typeof item === "object" && item !== null) {
                  return (
                    <div
                      key={i}
                      className="ml-2 mb-2 border-l-4 pl-2 border-gray-300"
                    >
                      {item.title && (
                        <p className="text-md font-medium">{item.title}</p>
                      )}
                      {item.role && (
                        <p className="text-md font-medium">{item.role}</p>
                      )}
                      {item.organization && (
                        <p
                          className={`text-sm ${
                            improvised ? "text-green-500" : "text-gray-500"
                          }`}
                        >
                          {item.organization}
                        </p>
                      )}
                      {item.institution && (
                        <p
                          className={`text-sm ${
                            improvised ? "text-green-500" : "text-gray-500"
                          }`}
                        >
                          {item.institution}
                        </p>
                      )}
                      {item.issuer && (
                        <p
                          className={`text-sm ${
                            improvised ? "text-green-500" : "text-gray-500"
                          }`}
                        >
                          Issued by {item.issuer}
                        </p>
                      )}
                      {item.description && (
                        <p
                          className={`text-sm ${
                            improvised ? "text-green-500" : "text-gray-500"
                          } mt-1`}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                }

                // Fallback
                return (
                  <p key={i} className="text-gray-600">
                    {JSON.stringify(item)}
                  </p>
                );
              })
            ) : (
              <p className="text-gray-500 italic">No data</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
