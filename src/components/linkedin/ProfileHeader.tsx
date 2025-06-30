/* eslint-disable @next/next/no-img-element */
// components/ProfileHeader.tsx

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
              {post}
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
