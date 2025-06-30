// components/SuggestionsAnalytics.tsx
export default function SuggestionsAnalytics() {
  return (
    <div className="space-y-4">
      {/* Suggested for you */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500 mb-1">👁️ Private to you</p>
        <h4 className="font-semibold mb-1">
          Maximize your chances to get a job with help from your network
        </h4>
        <p className="text-sm text-gray-600">
          85% of job seekers who post find support from their network in their
          job search.
        </p>
        <button className="mt-2 px-3 py-1 border border-gray-400 rounded-full text-sm">
          Draft a post
        </button>
      </div>

      {/* Analytics */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500 mb-1">👁️ Private to you</p>
        <div className="flex flex-wrap justify-between text-sm">
          <div>
            <p className="font-semibold">👥 197 profile views</p>
            <p>Discover who&apos;s viewed your profile.</p>
          </div>
          <div>
            <p className="font-semibold">📊 0 post impressions</p>
            <p>Past 7 days</p>
          </div>
          <div>
            <p className="font-semibold">🔍 33 search appearances</p>
            <p>How often you appear in results</p>
          </div>
        </div>
        <a className="block mt-2 text-center text-sm text-blue-600">
          Show all analytics →
        </a>
      </div>
    </div>
  );
}
