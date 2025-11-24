
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Building,
  Code,
  Calendar,
  MapPin,
  Rocket,
  Eye,
} from "lucide-react";
import { EXPERIENCE_DATA } from "@/constants";

const Experience = () => {
  const ExperienceHeader = ({ logo, company }: { logo: string; company: string }) => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea]/35 to-[#3b82f6]/35" />
      <img 
        src={logo} 
        alt={`${company} logo`} 
        className="w-12 h-12 object-contain relative z-10 bg-white rounded-lg p-1"
      />
    </div>
  );

  const ExperienceDetails = ({ 
    role, 
    company, 
    period, 
    location, 
    type,
    responsibilities, 
    technologies,
    achievements 
  }: {
    role: string;
    company: string; 
    period: string;
    location: string;
    type: string;
    responsibilities: string[];
    technologies: string[];
    achievements?: string[];
  }) => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{role}</h3>
          <Badge variant="secondary" className="text-xs">{type}</Badge>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{company}</p>
        <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Key Responsibilities</h4>
          <ul className="space-y-1">
            {responsibilities.map((item, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                <span className="inline-block w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Achievements</h4>
            <ul className="space-y-1">
              {achievements.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-sm font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ExperienceContent = ({ 
    role, 
    company, 
    period, 
    location, 
    type,
    responsibilities, 
    technologies,
    achievements 
  }: {
    role: string;
    company: string; 
    period: string;
    location: string;
    type: string;
    responsibilities: string[];
    technologies: string[];
    achievements?: string[];
  }) => (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold leading-tight">{role}</h3>
        </div>
        <p className="text-xs font-medium text-muted-foreground">{company}</p>
        <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-fit mt-2 bg-white text-black hover:bg-gray-50 border-gray-200 rounded-md text-xs px-2 py-1 h-auto"
          >
            <Eye className="h-2.5 w-2.5" />
            View more
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" side="top" align="start">
          <ExperienceDetails
            role={role}
            company={company}
            period={period}
            location={location}
            type={type}
            responsibilities={responsibilities}
            technologies={technologies}
            achievements={achievements}
          />
        </PopoverContent>
      </Popover>
    </div>
  );

  const getExperienceIcon = (title: string) => {
    switch (title) {
      case "Current Role":
        return <Rocket className="h-4 w-4 text-neutral-500" />;
      case "Previous Role":
        return <Building className="h-4 w-4 text-neutral-500" />;
      case "Early Career":
        return <Code className="h-4 w-4 text-neutral-500" />;
      default:
        return <Code className="h-4 w-4 text-neutral-500" />;
    }
  };

  const items = EXPERIENCE_DATA.map((exp) => ({
    title: exp.title,
    description: (
      <ExperienceContent
        role={exp.role}
        company={exp.company}
        period={exp.period}
        location={exp.location}
        type={exp.type}
        responsibilities={exp.responsibilities}
        technologies={exp.technologies}
        achievements={exp.achievements}
      />
    ),
    header: <ExperienceHeader logo={exp.logo} company={exp.company} />,
    icon: getExperienceIcon(exp.title),
  }));

  return (
    <section id="experience" className="section bg-secondary/30 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Professional Experience</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            My journey in building scalable software solutions across different companies and technologies.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className="h-140!"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Experience;
