/* eslint-disable @next/next/no-img-element */
// components/ExperienceProjects.tsx

import { Experience } from "@/types/linkedin";

type Props = {
  improvised: boolean;
  experience: Experience[];
};

export default function ExperienceProjects({ experience, improvised }: Props) {
  return (
    <div className="space-y-4">
      {/* Education */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Experience</h3>
        {experience.map((exp, ind) => (
          <div className="mt-2 space-y-3 text-sm" key={ind}>
            <div>
              <div className="flex items-center gap-2">
                <img
                  alt="company_profile"
                  className="w-[50px]"
                  src={exp.company_image}
                />
                <div>
                  <p className="font-semibold">{exp.company_name}</p>
                  <p className="font-normal">{exp.job_title}</p>
                  <p className="font-normal">{exp.duration}</p>
                </div>
              </div>
              <p
                className={`${improvised ? "text-green-500" : "text-gray-500"}`}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
