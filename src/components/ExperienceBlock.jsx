import Description from "./Description";
import SkillPill from "./SkillPill";

const ExperienceBlock = ({ experience }) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#cccccc]">
          {experience.company}
        </h3>
      </div>
      {experience.roles.map((role, roleIndex) => (
        <div
          key={roleIndex}
          className="mx-2 mb-10 border-b-[1px] border-gray-500"
        >
          <div className="text-sm text-[#cccccc]">{role.duration}</div>
          <h4 className="mb-2 text-2xl font-bold">
            <span className="text-red-500"> - </span>
            {role.title}
          </h4>
          {role.descriptions.map((description, descIndex) => (
            <Description key={descIndex} description={description} />
          ))}
          <div className="mb-4 flex flex-wrap gap-2">
            {role.skills.map((skill, skillIndex) => (
              <SkillPill key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceBlock;
