
import React, { useState } from 'react';
import { Eye, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects: Project[] = [
    {
      id: "blindassistant",
      title: "Blind Assistant",
      description: "An AI-powered mobile application designed to help visually impaired individuals navigate their surroundings and identify objects.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Python", "TensorFlow", "React Native", "AWS"],
      category: "ai",
      links: {
        github: "https://github.com/sohaibakhtar/blind-assistant"
      }
    },
    {
      id: "urdu-asr",
      title: "Urdu ASR",
      description: "Automatic Speech Recognition system for the Urdu language to convert spoken words into text with high accuracy.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "PyTorch", "NLP", "Speech Processing"],
      category: "ai",
      links: {
        demo: "https://urdu-asr-demo.example.com",
        github: "https://github.com/sohaibakhtar/urdu-asr"
      }
    },
    {
      id: "microservice-framework",
      title: "Microservice Framework",
      description: "A lightweight framework for building scalable microservices with built-in support for service discovery and monitoring.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      category: "backend",
      links: {
        github: "https://github.com/sohaibakhtar/microservice-framework"
      }
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Analytics Platform",
      description: "A platform for healthcare providers to analyze patient data and identify trends to improve care quality and outcomes.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Python", "React", "AWS", "Data Analytics"],
      category: "fullstack",
      links: {
        demo: "https://healthcare-analytics-demo.example.com"
      }
    }
  ];
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "backend", name: "Backend & APIs" },
    { id: "fullstack", name: "Full Stack" }
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Personal Projects</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            Explore some of my side projects and interesting things I've built outside of work.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 opacity-0 animate-fade-in animate-delay-200">
          <div className="inline-flex p-1 rounded-lg bg-background">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group animated-border bg-card rounded-xl overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        <Eye size={16} />
                        <span>View Demo</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
