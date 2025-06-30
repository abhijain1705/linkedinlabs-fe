const industries = [
  "Tech",
  "Marketing",
  "Finance",
  "Design",
  "Legal Services",
  "Healthcare",
  "Education & EdTech",
  "Real Estate",
  "Human Resources",
  "Consulting",
  "Freelancing",
  "E-commerce",
  "SaaS & B2B",
  "Startups & Entrepreneurship",
  "Nonprofits & NGOs",
];

type Props = {
  setuserIndustry: React.Dispatch<React.SetStateAction<string>>;
  userIndustry: string;
  setprompt: React.Dispatch<React.SetStateAction<string>>
};

const IndustryChips: React.FC<Props> = ({ setprompt, setuserIndustry, userIndustry }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {industries.map((industry) => (
        <span
          key={industry}
          onClick={() => {setuserIndustry(industry); setprompt(`Modify header and about for ${industry} roles`)}}
          className={`px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-black hover:text-white transition ${
            industry === userIndustry ? "bg-black text-white" : ""
          }`}
        >
          {industry}
        </span>
      ))}
    </div>
  );
};

export default IndustryChips;
