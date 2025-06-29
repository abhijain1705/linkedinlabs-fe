const industries = ["Tech", "Marketing", "Finance", "Design"];

const IndustryChips: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {industries.map((industry) => (
        <span
          key={industry}
          className="px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-black hover:text-white transition"
        >
          {industry}
        </span>
      ))}
    </div>
  );
};

export default IndustryChips;
