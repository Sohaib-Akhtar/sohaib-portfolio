
import React from 'react';
import { Code, Cloud, Server, Globe, Award, Check } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={20} />, name: "Software Development" },
    { icon: <Cloud size={20} />, name: "Cloud Computing" },
    { icon: <Server size={20} />, name: "DataOps" },
    { icon: <Globe size={20} />, name: "API Development" },
  ];

  const languages = [
    { name: "English", proficiency: "Full Professional" },
    { name: "German", proficiency: "Elementary" },
  ];
  
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            A passionate software engineer with a focus on building scalable solutions and cloud-native applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-left animate-delay-200">
            <p className="text-lg leading-relaxed">
              I'm Sohaib, a software engineer with expertise in cloud computing and microservices architecture. 
              Currently working at Motius GmbH part-time while pursuing my Master's degree in Computer Science at Universität Passau.
            </p>
            <p className="text-lg leading-relaxed">
              With experience at companies like Teradata and Funavry Technologies, I've developed a strong 
              foundation in software development practices, API design, and cloud solutions using technologies 
              like Java, Python, Angular, and AWS.
            </p>
            <p className="text-lg leading-relaxed">
              In my free time, I enjoy engaging in thought-provoking challenges and creative interactions with colleagues. 
              I'm also passionate about developing AI solutions and healthcare applications as personal projects.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Languages</h3>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={18} className="text-primary mr-2" />
                    <span className="font-medium">{language.name}:</span>
                    <span className="ml-2 text-muted-foreground">{language.proficiency} Proficiency</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 opacity-0 animate-fade-in-right animate-delay-300">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Areas of Specialization</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-background/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Notable Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>AWS Certified Cloud Practitioner</span>
                </li>
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>Spot Performance Award at Teradata</span>
                </li>
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>Employee of the Quarter Award at Teradata</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
