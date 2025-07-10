
import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  description: string[];
  type: string;
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const experiences: ExperienceItem[] = [
    {
      id: "motius",
      role: "Software Engineer",
      company: "Motius GmbH",
      logo: "/lovable-uploads/db7afb67-f46c-4707-ab0b-4454654f83c6.png",
      location: "Munich, Bavaria, Germany",
      period: "Sept 2024 - Present",
      description: [
        "Developed from scratch a sales incentive dashboard for Siemens global team in Next.js",
        "Working with Turborepo (microfrontends and microservices) for advanced inventory management systems",
        "Implementing CI/CD pipelines for automated safe and faster deployments across multiple regions",
        "Collaborating with cross-functional teams",
      ],
      type: "part-time"
    },
    {
      id: "teradata",
      role: "Software Engineer",
      company: "Teradata",
      logo: "/lovable-uploads/50f3b587-0bc9-4bd5-b98d-97cf4f557c4f.png",
      location: "Islamabad, Pakistan",
      period: "Sept 2021 - Mar 2024",
      description: [
        "Led the development of microservices for a data integration solutions using Java and Spring Boot",
        "Designed and implemented complex, performant RESTful APIs",
        "Optimized applications by identifying bottlenecks to increase customer retention",
        "Received Spot Performance Award and Employee of the Quarter Award for exceptional contributions in AWS optimization"
      ],
      type: "full-time"
    },
    {
      id: "funavry",
      role: "Back End Developer Intern",
      company: "Funavry Technologies",
      logo: "/lovable-uploads/ef75fdc4-b6f0-491b-9e86-8950385385cd.png",
      location: "Islamabad, Pakistan",
      period: "May 2020 - Aug 2020",
      description: [
        "Developed backend services using Python and Django framework for an AI based application",
        "Implemented database models and migrations for efficient data storage",
        "Created API endpoints for mobile and web applications",
        "Participated in code reviews and testing processes"
      ],
      type: "internship"
    }
  ];
  
  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);
  
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Professional Experience</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            My journey in the tech industry has given me valuable experience across various roles and organizations.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 opacity-0 animate-fade-in animate-delay-200 text-white">
          <div className="inline-flex p-1 rounded-lg bg-secondary">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "all" 
                  ? "gradient-fill text-white shadow-sm" 
                  : "text-muted-foreground hover:text-foreground gradient-border"
              }`}
            >
              All Experiences
            </button>
            <button
              onClick={() => setActiveTab("full-time")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "full-time" 
                  ? "gradient-fill text-white shadow-sm" 
                  : "text-muted-foreground hover:text-foreground gradient-border"
              }`}
            >
              Full-time
            </button>
            <button
              onClick={() => setActiveTab("part-time")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "part-time" 
                  ? "gradient-fill text-white shadow-sm" 
                  : "text-muted-foreground hover:text-foreground gradient-border"
              }`}
            >
              Part-time
            </button>
            <button
              onClick={() => setActiveTab("internship")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "internship" 
                  ? "gradient-fill text-white shadow-sm" 
                  : "text-muted-foreground hover:text-foreground gradient-border"
              }`}
            >
              Internships
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="animated-border bg-card p-3 md:p-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6 glass-effect">
                <div className="md:w-24 shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white p-2 shadow-sm">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 text-white">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center mt-1">
                        <span className="font-medium">{exp.company}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[white] text-black ml-2">
                          {exp.type === "full-time" ? "Full-time" : exp.type === "part-time" ? "Part-time" : "Internship"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 flex items-center text-sm text-white">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center text-xs mb-4 bg-[white] text-black px-3 py-2 rounded-md">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2 text-foreground text-white">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
