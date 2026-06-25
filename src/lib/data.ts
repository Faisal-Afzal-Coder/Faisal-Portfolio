export const siteConfig = {
  name: "Faisal Afzal",
  title: "Faisal Afzal | MERN Stack Developer",
  description:
    "Portfolio of Faisal Afzal — MERN Stack Developer, Frontend Developer, and React Developer based in Gujranwala, Pakistan. Building modern, responsive web applications.",
  url: "https://faisalafzal.dev",
  ogImage: "/images/profile.png",
  author: "Faisal Afzal",
  keywords: [
    "Faisal Afzal",
    "MERN Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer Pakistan",
    "JavaScript Developer",
    "Node.js Developer",
    "Portfolio",
  ],
};

export const personalInfo = {
  name: "Faisal Afzal",
  headline: "Hi, I'm Faisal Afzal",
  titles: [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "BSIT Student",
  ],
  subheadline: "MERN Stack Developer | Frontend Developer | React Developer",
  summary:
    "I am a passionate MERN Stack Developer and Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. Currently pursuing a BS in Information Technology while gaining hands-on industry experience through professional training. I enjoy learning new technologies and creating practical solutions through clean and efficient code.",
  location: "Gujranwala, Pakistan",
  email: "faisalafzal0008@gmail.com",
  phone: "+92 319 0700653",
  linkedin: "https://www.linkedin.com/in/faisal-afzal-202b62330/",
  github: "https://github.com/Faisal-Afzal-Coder",
  profileImage: "/images/profile.png",
  resumePath: "/Faisal-Afzal-Resume.pdf",
};

export const aboutContent = {
  paragraphs: [
    "My name is Faisal Afzal, and I am an aspiring MERN Stack Developer currently pursuing a Bachelor of Science in Information Technology. Alongside my academic studies, I am continuously improving my technical skills through professional development programs and industry training.",
    "I have completed professional frontend development training covering HTML, CSS, Bootstrap, JavaScript, React.js, and Firebase. Currently, I am completing an intensive MERN Stack Development program at Saylani and receiving practical training in a software company where I work on real-world development concepts and workflows.",
    "I am passionate about web development and enjoy turning ideas into functional, responsive, and visually appealing applications. My goal is to become a highly skilled Full Stack Developer capable of building scalable and impactful digital products.",
  ],
  careerGoals:
    "My goal is to establish myself as a professional Full Stack MERN Developer and contribute to innovative software projects. I aim to gain industry experience, work on challenging applications, and continuously improve my expertise in modern web technologies. In the future, I plan to explore freelancing opportunities, contribute to open-source projects, and build successful digital products that solve real-world problems.",
  strengths: [
    "Problem Solving",
    "Quick Learner",
    "Good Communication Skills",
    "Team Collaboration",
    "Adaptability",
    "Attention to Detail",
    "Continuous Learning Mindset",
    "Self Motivation",
  ],
};

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 82 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 72 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "npm", level: 85 },
    ],
  },
];

export const education = [
  {
    id: "bsit",
    degree: "BS Information Technology",
    institution: "Agriculture University Faisalabad",
    period: "Currently Enrolled · 4th Semester",
    status: "current" as const,
    description:
      "Pursuing a Bachelor of Science in Information Technology, building a strong foundation in software development, databases, and modern computing practices.",
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    institution: "Completed",
    period: "Completed",
    status: "completed" as const,
    description:
      "Successfully completed intermediate education, establishing the academic foundation for my journey into information technology and software development.",
  },
  {
    id: "saylani",
    degree: "MERN Stack Development Program",
    institution: "Saylani Mass IT Training",
    period: "Currently in Final Phase",
    status: "current" as const,
    description:
      "Intensive professional training covering MongoDB, Express.js, React.js, and Node.js — building full-stack applications with industry best practices.",
  },
  {
    id: "software-house",
    degree: "MERN Stack Developer Trainee",
    institution: "Software House Training",
    period: "2+ Months",
    status: "current" as const,
    description:
      "Hands-on industry training focused on professional development workflows, version control, team collaboration, and real-world web application development.",
  },
];

export const experience = [
  {
    id: "mern-trainee",
    role: "MERN Stack Developer Trainee",
    company: "Software Company",
    period: "Present",
    type: "Training",
    description:
      "Currently receiving practical industry training in a software company where I am learning professional development workflows, version control, team collaboration, and modern web application development.",
    highlights: [
      "Professional development workflows",
      "Version control with Git & GitHub",
      "Team collaboration practices",
      "Modern web application development",
    ],
  },
];

export const projects = [
  {
    id: "todo-app",
    title: "Todo Application",
    description:
      "A React.js based Todo Application implementing complete CRUD operations with a clean, responsive interface designed for seamless task management.",
    features: [
      "Add Tasks",
      "Edit Tasks",
      "Delete Tasks",
      "Update Tasks",
      "Responsive Design",
    ],
    technologies: ["React.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Faisal-Afzal-Coder",
    liveUrl:"https://fanatical-shirt1334.surge.sh/",
    featured: true,
  },
];

export const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building pixel-perfect, responsive user interfaces with modern HTML, CSS, JavaScript, and React.js.",
    icon: "Layout",
  },
  {
    id: "react",
    title: "React Development",
    description:
      "Creating dynamic, component-based web applications with React.js for optimal performance and user experience.",
    icon: "Atom",
  },
  {
    id: "responsive",
    title: "Responsive Website Development",
    description:
      "Designing websites that look and perform flawlessly across mobile, tablet, and desktop devices.",
    icon: "Smartphone",
  },
  {
    id: "landing",
    title: "Landing Page Development",
    description:
      "Crafting high-converting, visually stunning landing pages that capture attention and drive engagement.",
    icon: "Rocket",
  },
  {
    id: "mern",
    title: "MERN Stack Development",
    description:
      "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    icon: "Layers",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Providing ongoing support, updates, and optimizations to keep your website running smoothly.",
    icon: "Wrench",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.github,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    icon: "Linkedin",
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
];

export const typingTexts = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "BSIT Student",
];
