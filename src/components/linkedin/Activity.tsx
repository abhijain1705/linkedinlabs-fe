/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Activity.tsx

type ActivityProps = {
  data?: any; // Replace 'any' with your actual data type if available
};

export default function Activity({ data }: ActivityProps) {
  if (!data) {
    return (
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Activity</h3>
          <span className="text-gray-500 text-sm">No Data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Activity</h3>
        <button className="btn-outline text-sm">Create a post</button>
      </div>
      {/* Render your data here */}
    </div>
  );
}
