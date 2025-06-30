/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = { data: Record<string, any> };

export default function OptimizeComponent({ data }: Props) {
  return (
    <>
      {Object.entries(data).map(([key, value], idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow mt-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold capitalize mb-2">{key}</h3>

            {/* Handle arrays */}
            {Array.isArray(value) && value.length > 0 ? (
              value.map((item: any, i: number) => {
                // If it's a string (e.g., skill or language)
                if (typeof item === "string" || typeof item === "number") {
                  return (
                    <p key={i} className="text-gray-700 ml-2">
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
                        <p className="text-sm text-gray-600">
                          {item.organization}
                        </p>
                      )}
                      {item.institution && (
                        <p className="text-sm text-gray-600">
                          {item.institution}
                        </p>
                      )}
                      {item.issuer && (
                        <p className="text-sm text-gray-600">
                          Issued by {item.issuer}
                        </p>
                      )}
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">
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
