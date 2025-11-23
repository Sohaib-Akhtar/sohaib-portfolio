
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SkillIcon } from "@/components/ui/skill-icon";
import { ALL_SKILLS } from "@/constants";

const Skills = () => {
  const skillItems = ALL_SKILLS.map((skill) => ({
    name: skill.name,
    icon: (
      <SkillIcon
        name={skill.name}
        devicon={skill.devicon}
        icon={skill.icon}
        color={skill.color}
        isArchitectural={skill.isArchitectural}
        size={28}
      />
    ),
  }));

  return (
    <section id="skills" className="section py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title opacity-0 animate-fade-in">Skills & Expertise</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            A comprehensive overview of my technical skills and areas of expertise in software engineering.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in animate-delay-200">
          <InfiniteMovingCards
            items={skillItems}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="py-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
