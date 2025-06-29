// components/ProfileHeader.tsx
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="bg-white mb-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src="/banner.jpg"
          alt="Banner"
          width={1200}
          height={300}
          className="w-full h-40 object-cover"
        />
        <div className="absolute left-4 -bottom-12">
          <Image
            src="/profile.jpg"
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
            <h2 className="text-xl font-bold">Aaradhya Jain</h2>
            <p className="text-sm text-gray-600">Full Stack Engineer</p>
            <p className="text-sm text-gray-500">
              Jaipur, Rajasthan, India · <a className="text-blue-600">Contact info</a>
            </p>
            <a href="#" className="text-sm text-blue-600 underline">
              Portfolio ↗
            </a>
            <p className="text-sm text-gray-500">832 followers · 500+ connections</p>
          </div>
          <Image src="/college.png" alt="college logo" width={40} height={40} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="btn-primary">Open to</button>
          <button className="btn-outline">Add profile section</button>
          <button className="btn-outline">Enhance profile</button>
          <button className="btn-ghost border">Resources</button>
        </div>

        <div className="bg-gray-100 text-sm p-3 mt-4 rounded-lg text-gray-700">
          <strong className="block">Open to work</strong>
          Python Developer roles<br />
          <a className="text-blue-600">Show details</a>
        </div>
      </div>
    </div>
  );
}
