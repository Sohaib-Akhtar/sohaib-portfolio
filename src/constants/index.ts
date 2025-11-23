// Personal Information
export const PERSONAL_INFO = {
  name: "Sohaib Akhtar",
  email: "sohaib.akhtar.dev@gmail.com",
  github: "https://github.com/sohaib-akhtar",
  linkedin: "https://www.linkedin.com/in/connoisseur1/",
  cv: "https://drive.google.com/file/d/1bu60Omo9DTTSG2U5k4cdr1bKW9ftDBrb/view?usp=sharing",
  profileImage: "/assets/images/profile.png"
};

// Hero Section Content
export const HERO_CONTENT = {
  typewriterWords: [
    { text: "Building" },
    { text: "exceptional", className: "text-gradient" },
    { text: "software" },
    { text: "experiences" }
  ],
  buttons: {
    contact: {
      text: "Get in touch",
      href: "#contact",
      className: "gradient-fill inline-flex items-center px-6 py-3 text-white font-medium"
    },
    work: {
      text: "View professional experience",
      href: "#experience",
      className: "gradient-border inline-flex items-center px-6 py-3 font-medium text-foreground"
    },
    cv: {
      text: "View CV",
      href: PERSONAL_INFO.cv,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "gradient-border inline-flex items-center px-6 py-3 font-medium text-foreground"
    }
  }
};

// Navigation Items
export const NAVIGATION_ITEMS = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: PERSONAL_INFO.github,
    ariaLabel: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    name: "LinkedIn", 
    href: PERSONAL_INFO.linkedin,
    ariaLabel: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    name: "Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    ariaLabel: "Email"
  }
];

// Experience Data
export const EXPERIENCE_DATA = [
  {
    title: "Current Role",
    role: "Software Engineer",
    company: "Motius GmbH",
    period: "Sept 2024 - Present",
    location: "Munich, Germany",
    type: "Part-time",
    logo: "/assets/images/motius-logo.png",
    responsibilities: [
      "Developed sales incentive dashboard for Siemens global team using Next.js",
      "Working with Turborepo architecture for microfrontends and microservices",
      "Implementing CI/CD pipelines for automated deployments across multiple regions",
      "Collaborating with cross-functional teams on advanced inventory management systems"
    ],
    technologies: ["Next.js", "Turborepo", "CI/CD", "React", "TypeScript", "Microservices"]
  },
  {
    title: "Previous Role",
    role: "Software Engineer",
    company: "Teradata", 
    period: "Sept 2021 - Mar 2024",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    logo: "/assets/images/teradata-logo.png",
    responsibilities: [
      "Led development of microservices for data integration solutions using Java and Spring Boot",
      "Designed and implemented complex, performant RESTful APIs",
      "Optimized applications by identifying bottlenecks to increase customer retention",
      "Collaborated on AWS infrastructure and performance optimization projects"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "AWS", "Microservices", "Data Integration"],
    achievements: [
      "Received Spot Performance Award for exceptional contributions",
      "Employee of the Quarter Award for AWS optimization excellence"
    ]
  },
  {
    title: "Early Career",
    role: "Backend Developer Intern",
    company: "Funavry Technologies",
    period: "May 2020 - Aug 2020", 
    location: "Islamabad, Pakistan",
    type: "Internship",
    logo: "/assets/images/funavry-logo.png",
    responsibilities: [
      "Developed backend services using Python and Django framework for AI applications",
      "Implemented database models and migrations for efficient data storage",
      "Created API endpoints for mobile and web applications",
      "Participated in code reviews and testing processes"
    ],
    technologies: ["Python", "Django", "REST APIs", "Database Design", "AI Applications"]
  }
];

// Education Data
export const EDUCATION_DATA = [
  {
    id: "passau",
    degree: "Master of Science in Computer Science",
    institution: "Universität Passau",
    logo: "/assets/images/uni-passau-logo.png",
    location: "Passau, Germany",
    period: "April 2024 - Feb 2026",
    description: "Focusing on advanced topics in software engineering, data warehousing, and AI."
  },
  {
    id: "nuces",
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Computer and Emerging Sciences",
    logo: "/assets/images/nuces-logo.png",
    location: "Islamabad, Pakistan",
    period: "Sep 2017 - Jul 2021",
    description: "Earned a place on the Dean's Honour List for academic excellence in Spring 2021 and Fall 2020."
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: "aws-cert",
    name: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    logo: "/assets/images/aws-cert-logo.png",
    date: "June 2022"
  }
];

export const LEARNING_DATA = {
  title: "Certifications & Online Learning",
  logo: "/assets/images/learning-logo.png",
  description: "Continuously upgrading skills through online platforms focusing on AI technologies, design patterns, and advanced programming concepts."
};

// Projects Data
export const PROJECTS_DATA = [
  {
    id: "blindassistant",
    title: "Blind Assistant",
    description: "An AI-powered mobile application designed to help visually impaired individuals navigate their surroundings and identify objects.",
    detailedDescription: "This comprehensive AI solution combines computer vision, natural language processing, and mobile development to create an accessible navigation aid. Features include real-time object detection, text-to-speech conversion, and voice-guided navigation.",
    image: "https://www.asme.org/getmedia/edf28cc5-e0be-43d4-8d87-1ba431306477/walking-stick-for-the-blind_hero.jpg?width=854&height=480&ext=.jpg",
    technologies: ["Python", "PyTorch", "React Native (Expo)", "Computer Vision", "NLP"],
    category: "ai",
    features: [
      "Real-time object detection and recognition",
      "Voice-guided navigation system", 
      "Text-to-speech conversion for written content",
      "Accessibility-first mobile interface design"
    ],
    links: {
      github: "https://link.springer.com/chapter/10.1007/978-3-031-53717-2_39"
    }
  },
  {
    id: "urdu-asr",
    title: "Urdu ASR",
    description: "Automatic Speech Recognition system for the Urdu language to convert spoken words into text with high accuracy.",
    detailedDescription: "A state-of-the-art speech recognition system specifically trained for Urdu language nuances, dialects, and phonetic variations. Utilizes deep learning models and advanced signal processing techniques for optimal accuracy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Urdu_alphabets.png",
    technologies: ["Python", "KaldiASR", "NLP", "Speech Processing", "TensorFlow"],
    category: "ai",
    features: [
      "Support for multiple Urdu dialects",
      "Real-time speech-to-text conversion",
      "Noise-robust audio processing",
      "Custom language model training pipeline"
    ],
    links: {
      github: "https://github.com/sohaib-akhtar"
    }
  },
  {
    id: "microservice-framework",
    title: "DataOps Framework",
    description: "A lightweight framework for building scalable DataOps microservices with built-in support for service discovery and monitoring.",
    detailedDescription: "Enterprise-grade microservices framework designed for data-intensive applications. Includes service mesh capabilities, automated scaling, comprehensive monitoring, and seamless integration with cloud platforms.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Microservices_app_example_v0.4.png",
    technologies: ["TS", "Node.js", "Docker", "Sequelize", "Kubernetes", "AWS"],
    category: "backend",
    features: [
      "Auto-scaling microservices architecture",
      "Integrated service discovery and load balancing",
      "Real-time monitoring and alerting",
      "Cloud-native deployment patterns"
    ],
    links: {}
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics Platform",
    description: "A platform for healthcare providers to analyze patient data and identify trends to improve care quality and outcomes using AI.",
    detailedDescription: "Comprehensive healthcare data analytics solution that leverages machine learning to provide actionable insights for healthcare providers. Features predictive modeling, patient outcome analysis, and compliance reporting.",
    image: "https://www.xenonstack.com/hubfs/healthcare-analytics-platform-xenonstack.png",
    technologies: ["Ollama", "Next.js", "AWS", "Data Analytics", "Python"],
    category: "fullstack",
    features: [
      "Predictive patient outcome modeling",
      "Real-time clinical decision support",
      "HIPAA-compliant data processing",
      "Interactive analytics dashboards"
    ],
    links: {}
  }
];

export const PROJECT_CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "ai", name: "AI & Machine Learning" },
  { id: "backend", name: "Backend & APIs" },
  { id: "fullstack", name: "Full Stack" }
];

// Skills Data
interface Skill {
  name: string;
  icon?: string;
  devicon?: string;
  color?: string;
  isArchitectural?: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core programming languages and frameworks",
    skills: [
      { name: "Java", devicon: "java/java-original", color: "#f89820" },
      { name: "Python", devicon: "python/python-original", color: "#3776ab" },
      { name: "JavaScript", devicon: "javascript/javascript-original", color: "#f7df1e" },
      { name: "TypeScript", devicon: "typescript/typescript-original", color: "#007acc" },
      { name: "Angular", devicon: "angularjs/angularjs-original", color: "#dd1b16" },
      { name: "React", devicon: "react/react-original", color: "#61dafb" },
      { name: "Next.js", devicon: "nextjs/nextjs-original", color: "#000000" },
      { name: "Spring Boot", devicon: "spring/spring-original", color: "#6db33f" },
      { name: "Nest.js", devicon: "nestjs/nestjs-original", color: "#e0234e" }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Database management and storage solutions",
    skills: [
      { name: "PostgreSQL", devicon: "postgresql/postgresql-original", color: "#336791" },
      { name: "MySQL", devicon: "mysql/mysql-original", color: "#4479a1" },
      { name: "MongoDB", devicon: "mongodb/mongodb-original", color: "#47a248" },
      { name: "Redis", devicon: "redis/redis-original", color: "#dc382d" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Cloud platforms and DevOps tools",
    skills: [
      { name: "AWS", devicon: "amazonwebservices/amazonwebservices-plain-wordmark", color: "#ff9900" },
      { name: "Docker", devicon: "docker/docker-original", color: "#2496ed" },
      { name: "Kubernetes", devicon: "kubernetes/kubernetes-original", color: "#326ce5" },
      { name: "Terraform", devicon: "terraform/terraform-original", color: "#623ce4" },
      { name: "Jenkins", devicon: "jenkins/jenkins-original", color: "#d33833" }
    ]
  }
];

export const ALL_SKILLS = SKILLS_DATA.flatMap(category => 
  category.skills.map(skill => ({
    ...skill,
    category: category.name
  }))
);