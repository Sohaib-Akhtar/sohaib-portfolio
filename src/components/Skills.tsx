
import React, { useState } from 'react';
import { Code, Database, Server, Cloud, Layers, LineChart } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");
  
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code size={20} />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Angular", "React/Next.js", "Spring Boot", "Nest.js"]
    },
    {
      id: "databases",
      name: "Databases",
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud size={20} />,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"]
    },
    {
      id: "architecture",
      name: "Architecture",
      icon: <Layers size={20} />,
      skills: ["Microservices", "Microfrontends", "Event-Driven Architecture", "Domain-Driven Design"]
    },
  ];
  
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Skills & Expertise</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            A comprehensive overview of my technical skills and areas of expertise in software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3 opacity-0 animate-fade-in animate-delay-200">
            <div className="animated-border bg-card p-4 rounded-xl">
              <nav className="space-y-1">
                {skillCategories.map(category => (
                  <button
                    key={category.id}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-300 ${
                      activeCategory === category.id 
                        ? "gradient-fill text-white" 
                        : "gradient-border text-foreground"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className={`mr-3 ${activeCategory === category.id ? "text-white" : "text-primary"}`}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-9 opacity-0 animate-fade-in animate-delay-300">
            <div className="animated-border bg-card p-6 md:p-8 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                {skillCategories.find(cat => cat.id === activeCategory)?.icon}
                <span className="ml-2">{skillCategories.find(cat => cat.id === activeCategory)?.name} Skills</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {activeSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/50 rounded-lg p-4 flex items-center justify-center text-center hover:bg-secondary transition-colors duration-200"
                    style={{ animationDelay: `${100 + index * 50}ms` }}
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
