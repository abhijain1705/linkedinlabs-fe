// components/EducationProjects.tsx
export default function EducationProjects() {
  return (
    <div className="space-y-4">
      {/* Education */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Education</h3>
        <div className="mt-2 space-y-3 text-sm">
          <div>
            <p className="font-semibold">Banasthali Vidyapith</p>
            <p>BCA, Computer Applications (2021 - 2024)</p>
            <p className="text-gray-500">🧠 Microsoft Excel, Word +6 skills</p>
          </div>
          <div>
            <p className="font-semibold">Banasthali Vidyapith</p>
            <p>Bachelor’s Degree (2021 - 2024)</p>
          </div>
        </div>
        <a className="block mt-2 text-center text-sm text-blue-600">
          Show all 3 educations →
        </a>
      </div>

      {/* Projects */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Projects</h3>
        <div className="mt-2 space-y-4 text-sm">
          <div>
            <p className="font-semibold">Chess Game</p>
            <p>built a simple chess game in ReactJS and JavaScript</p>
            <p className="text-gray-500">💎 HTML, HTML5 +3 skills</p>
            <div className="bg-gray-100 p-2 rounded mt-1">Chess.com Clone</div>
          </div>
          <div>
            <p className="font-semibold">Quiz Master App</p>
            <p>built a full stack application using Flask and Jinja templates</p>
            <p className="text-gray-500">💎 Flask, Python +2 skills</p>
            <div className="bg-gray-100 p-2 rounded mt-1">Login to Quiz Time</div>
          </div>
        </div>
        <a className="block mt-2 text-center text-sm text-blue-600">
          Show all 3 projects →
        </a>
      </div>
    </div>
  );
}
