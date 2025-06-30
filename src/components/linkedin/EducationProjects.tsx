// components/EducationProjects.tsx

import { Education, Project } from "@/types/linkedin";

type Props = {
  education: Education[];
  projects: Project[];
  improvised: boolean;
};

export default function EducationProjects({ projects, education }: Props) {
  return (
    <div className="space-y-4">
      {/* Education */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Education</h3>
        {education.map((edu, ind) => (
          <div key={ind} className="mt-2 space-y-3 text-sm">
            <div>
              <p className="font-semibold">{edu.institution_name}</p>
              <p>
                {edu.degree} {"(" + edu.duration + ")"}
              </p>
              <p className="text-gray-500">{edu.field_of_study}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Projects</h3>
        <div className="mt-2 space-y-4 text-sm">
          {projects.map((prj, idx) => (
            <div key={idx}>
              <p className="font-semibold">{prj.title}</p>
              <p>{prj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
