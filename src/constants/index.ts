// Personal Information
export const PERSONAL_INFO = {
  name: "Sohaib Akhtar",
  email: "sohaib.akhtar.dev@gmail.com",
  github: "https://github.com/sohaib-akhtar",
  linkedin: "https://www.linkedin.com/in/connoisseur1/",
  cv: "https://drive.google.com/file/d/1bu60Omo9DTTSG2U5k4cdr1bKW9ftDBrb/view?usp=sharing",
  profileImage: "/lovable-uploads/860e5bc5-c4c1-4f18-ae60-9986b4c2c581.png"
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
    logo: "/lovable-uploads/db7afb67-f46c-4707-ab0b-4454654f83c6.png",
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
    logo: "/lovable-uploads/50f3b587-0bc9-4bd5-b98d-97cf4f557c4f.png",
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
    logo: "/lovable-uploads/ef75fdc4-b6f0-491b-9e86-8950385385cd.png",
    responsibilities: [
      "Developed backend services using Python and Django framework for AI applications",
      "Implemented database models and migrations for efficient data storage",
      "Created API endpoints for mobile and web applications",
      "Participated in code reviews and testing processes"
    ],
    technologies: ["Python", "Django", "REST APIs", "Database Design", "AI Applications"]
  }
];