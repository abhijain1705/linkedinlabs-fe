// components/Activity.tsx
export default function Activity() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Activity</h3>
        <button className="btn-outline text-sm">Create a post</button>
      </div>
      <p className="text-sm text-blue-600">832 followers</p>
      <div className="mt-2 space-y-3 text-sm text-gray-700">
        <p>
          <strong>Aaradhya jain</strong> commented on a post • 2mo<br />
          Hello kalp, please check your DM,<br />Thanks
        </p>
        <p>
          <strong>Aaradhya jain</strong> commented on a post • 5mo<br />
          Congrats!
        </p>
      </div>
      <a className="block mt-2 text-center text-sm text-blue-600">
        Show all comments →
      </a>
    </div>
  );
}
