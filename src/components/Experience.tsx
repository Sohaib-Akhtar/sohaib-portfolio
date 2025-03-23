
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
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFuVUvnSZpM_A/company-logo_400_400/company-logo_400_400/0/1705652294209/motius_gmbh_logo?e=1748476800&v=beta&t=6N-DuFd2ZqNR2sxcv0Al69h_dAbagJ57sZqgbFBC2iQ",
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
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGgQByLIN_rtA/company-logo_400_400/company-logo_400_400/0/1697134375805/teradata_logo?e=1748476800&v=beta&t=hbKGjOpgV5YnyAw4NS9vd4wce12-nxeIzqmvmbusCxU",
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
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHrTB68_8ZrcQ/company-logo_400_400/company-logo_400_400/0/1630573785366/funavry_logo?e=1748476800&v=beta&t=IDD2RQGhuxCduxgtOWhrt1vUXYyB2O_wTMpD0rGagZ0",
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
        
        <div className="flex justify-center mb-10 opacity-0 animate-fade-in animate-delay-200">
          <div className="inline-flex p-1 rounded-lg bg-secondary">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "all" 
                  ? "bg-[#426EF0] text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Experiences
            </button>
            <button
              onClick={() => setActiveTab("full-time")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "full-time" 
                  ? "bg-[#426EF0] text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full-time
            </button>
            <button
              onClick={() => setActiveTab("part-time")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "part-time" 
                  ? "bg-[#426EF0] text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Part-time
            </button>
            <button
              onClick={() => setActiveTab("internship")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "internship" 
                  ? "bg-[#426EF0] text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
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
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center mt-1">
                        <span className="font-medium">{exp.company}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary ml-2">
                          {exp.type === "full-time" ? "Full-time" : exp.type === "part-time" ? "Part-time" : "Internship"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 flex items-center text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center text-sm text-white mb-4 bg-[#426EF0] px-3 py-2 rounded-md">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2 text-foreground">
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
