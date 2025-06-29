// components/AboutFeatured.tsx
export default function AboutFeatured() {
  return (
    <div className="space-y-4">
      {/* About */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">About</h3>
        <p className="text-sm text-gray-700 mt-1">
          🚀 Aspiring full stack Developer | MCA Student | Passionate about Building Real-World Web Applications<br />
          I’m currently pursuing my Master of Computer Applications (MCA) from Banasthali Vidyapeeth...
        </p>
      </div>

      {/* Featured */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Featured</h3>
        <div className="border p-4 rounded-lg flex items-center gap-4 bg-gray-50 mt-2">
          <img src="/resume-thumbnail.png" className="w-32 h-20 object-cover" />
          <div>
            <p className="font-semibold">Hire me</p>
            <p className="text-sm text-gray-600">This is my resume for a Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
