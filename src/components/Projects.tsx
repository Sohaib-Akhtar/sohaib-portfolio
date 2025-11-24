"use client";

import { useState } from 'react';
import { Github, ExternalLink, Eye, Code, Zap, Target, Check } from 'lucide-react';
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "@/constants";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeCategory);

  const createDetailedContent = (project: typeof PROJECTS_DATA[0]) => {
    return (
      <div className="space-y-8">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                Project Overview
              </h3>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-500" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {Object.keys(project.links).length > 0 && (
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-indigo-500" />
                  Project Links
                </h3>
                <div className="flex flex-wrap gap-4">
                  {'demo' in project.links && project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}
                  {'github' in project.links && project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 font-medium shadow-lg"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Project Category</h4>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium">
                {PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.name}
              </span>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Development Status</h4>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">Completed</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Tech Highlights</h4>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cards = filteredProjects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        src: project.image,
        title: project.title,
        category: PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.name || project.category,
        content: createDetailedContent(project),
      }}
      index={index}
      layout={true}
    />
  ));

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
            {PROJECT_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full opacity-0 animate-fade-in animate-delay-300">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Projects;