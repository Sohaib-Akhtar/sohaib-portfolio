// Personal Information
export const PERSONAL_INFO = {
  name: "Sohaib Akhtar",
  email: "sohaib.akhtar.dev@gmail.com",
  github: "https://github.com/sohaib-akhtar",
  linkedin: "https://www.linkedin.com/in/connoisseur1/",
  cv: "https://drive.google.com/file/d/1Yx2K7m4NRNVegVJxSA1kHSqy2XbJZprN/view?usp=sharing",
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
      text: "View my work",
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