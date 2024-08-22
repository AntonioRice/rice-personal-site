const SkillPill = ({ skill }) => {
  return (
    <div className="inline-flex items-center rounded-2xl border border-gray-500 bg-[#2c2f31] px-4 py-2 text-center text-sm font-medium text-[#dadde2] shadow-xl">
      {skill}
    </div>
  );
};

export default SkillPill;
