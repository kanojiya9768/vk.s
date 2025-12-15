import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import {
  type ContactInfo,
  type Education,
  type Project,
  type SkillCategory,
  type SocialLink,
  type WorkExperience,
} from "./type";

// Skill Categories for the Skills Section
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "SEO", "Performance Optimization", "VS Code"],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    role: "Software Developer",
    company: "Bynaric Systems",
    type: "Full-time",
    duration: "Oct 2025 - Present · 3 mos",
    location: "CSMT Mumbai · On-site",
    description: "Contributing to enterprise software solutions.",
    skills: ["MySQL", "Node.js", "+21 skills"],
  },
  {
    role: "Software Developer",
    company: "GBIM Technologies Pvt. Ltd",
    type: "Full-time",
    duration: "Dec 2024 - Jul 2025 · 8 mos",
    location: "Ghansoli · On-site",
    description: "Developed and maintained digital marketing platforms.",
    skills: ["React.js", "Next.js", "+7 skills"],
  },
  {
    role: "Junior Software Developer",
    company: "Boppo Technologies",
    type: "Full-time",
    duration: "Sep 2023 - Oct 2024 · 1 yr 2 mos",
    location: "Navi Mumbai, Maharashtra, India · On-site",
    description: "Working as a software developer on various client projects.",
    skills: ["Javascript", "Tailwind CSS", "+11 skills"],
  },
  {
    role: "Frontend Developer intern",
    company: "The Adroit",
    type: "Full-time",
    duration: "Jun 2023 - Sep 2023 · 4 mos",
    location: "Belāpur, Maharashtra, India · On-site",
    description: "I was working as a React/Next js Developer.",
    skills: ["Scss", "Next.js", "+12 skills"],
  },
];

export const projects: Project[] = [
  {
    id: 13,
    title: "DTE Maharashtra EMIS",
    status: "Live",
    description: `DTE Maharashtra EMIS (Employee Management Information System) is a government HR platform developed for the Directorate of Technical Education, Maharashtra. It digitizes employee records, attendance, payroll, promotions, transfers, seniority, and verification processes for Class III & IV employees across government and aided technical institutions.`,
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Government Secure Auth",
      "Role-Based Access Control",
    ],
    liveLink: "https://emis.dtemaharashtra.gov.in/",
    image: "/img/projects/dte-emis.png",
    gif: "/img/projects/dte-emis-demo.gif",
    category: "Government / HRMS",
    year: "2024",
    featured: true,
  },
  {
    id: 14,
    title: "DTE Maharashtra Antim Manyata Portal",
    status: "Live",
    description: `Antim Manyata Portal (Final Approval Portal) is an official DTE Maharashtra system that enables educational institutes to submit, verify, and finalize course intake and affiliation details. Institutes authenticate using official DTE codes with OTP verification to update and confirm approval data.`,
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "OTP Authentication",
      "Secure Forms",
      "Government APIs",
    ],
    liveLink: "https://apps.dtemaharashtra.gov.in/antimportal",
    image: "/img/projects/dte-antim.png",
    gif: "/img/projects/antim-manyata-demo.gif",
    category: "Government / Education",
    year: "2024",
    featured: true,
  },

  {
    id: 4,
    title: "KeyDemand",
    status: "Live",
    description:
      "Keydemand is powered by Relevancy Matching that Elevates Your Commercial Real Estate Game!",
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://keydemand.in/",
    featured: true,
    image: "/img/projects/keydemand.png",
    gif: "/img/projects/keydemand-demo.gif",
    category: "Property",
    year: "2024",
  },
  {
    id: 3,
    title: "Boppo Technologies",
    status: "Live",
    description:
      "Boppo Technologies delivers enterprise Mobility solutions for SMEs, Start-ups, and full-grown enterprises. Cutting-edge platforms in the field of BI, Data Warehousing, and custom software.",
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://www.boppotechnologies.com/",
    featured: true,
    image: "/img/projects/boppo.png",
    gif: "/img/projects/boppo-demo.gif",
    category: "Corporate",
    year: "2024",
  },
  {
    id: 7,
    title: "ASBS MBA",
    status: "Live",
    description: `The ASBS MBA offers students a unique international immersion program in Slovenia, Germany, and Austria, providing invaluable insights into global business`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://asbsmba.com/",
    image: "/img/projects/asbs.png",
    gif: "/img/projects/asbs-demo.gif",
    category: "Education",
    githubLink: "",
    year: "2025",
  },
  {
    id: 11,
    title: "Dr. Ardesh",
    status: "Live",
    description: `Ardesh Facial Plastic Surgery! Dr. Ardesh's practice is built on trust and a deep understanding of your personal goals. Creating refined, subtle transformations.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://www.drardesh.com/",
    image: "/img/projects/ardesh.png",
    gif: "/img/projects/dr-ardesh-demo.gif",
    category: "Healthcare",
    year: "2025",
  },
  {
    id: 12,
    title: "Metamorphosis Clinic",
    status: "Live",
    description: `At Metamorphosis Clinic, We Believe In The Power Of Healthy, Radiant Skin. Advanced, Personalized Skincare Treatments Tailored To Your Unique Needs.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://www.metamorphosis-clinic.com/",
    image: "/img/projects/metamorphosis.png",
    gif: "/img/projects/metamorphosis-demo.gif",
    category: "Healthcare",
    year: "2024",
  },
  {
    id: 2,
    title: "Simandhar Education",
    description: `Simandhar Education is India's award-winning institute offering professional courses such as CPA, CMA, EA, and CIA, among others.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://www.simandhareducation.com/",
    status: "Completed",
    image: "/img/projects/simandhar.png",
    gif: "/img/projects/simandhar-demo.gif",
    year: "2023",
    category: "Education",
  },
  {
    id: 5,
    title: "Design Mosaic",
    status: "Live",
    description: `Architects & Engineers of Timeless elegance Vision, and Purpose. Crafting spaces that go beyond ordinary expectations.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://designsmosaic.us/",
    image: "/img/projects/mosaic.png",
    gif: "/img/projects/design-mosaic-demo.gif",
    category: "Architecture",
    year: "2025",
  },
  {
    id: 1,
    title: "MYHRMS (HRMS Platform)",
    description:
      "Building a modern HRMS tool for employee management, attendance, and payroll. Full-stack application with user authentication, dashboard, and comprehensive HR features.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    liveLink: "https://myhrms-frontend.vercel.app/login",
    status: "Under Development",
    featured: true,
    image: "/img/projects/my-hrms.png",
    gif: "/img/projects/myhrms-demo.gif",
    demo: "/img/projects/myhrms-preview.mp4",
    category: "Full-Stack",
    githubLink: "",
    year: "2025",
  },
  {
    id: 6,
    title: "Acceron",
    status: "Live",
    description:
      "One of the fastest growing value added distributor in the region. Providing value addition to product offerings while effectively helping customers.",
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://acceron.vercel.app/",
    image: "/img/projects/acceron.png",
    gif: "/img/projects/acceron-demo.gif",
    category: "IT Security",
    year: "2025",
  },
  {
    id: 8,
    title: "GBIM Main",
    status: "Live",
    description: `Performance-driven team focused on crafting innovative, measurable, and brand/business-specific digital strategies.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://www.gbim.com/",
    image: "/img/projects/gbim.png",
    gif: "/img/projects/gbim-main-demo.gif",
    category: "Corporate",
    year: "2025",
  },
  {
    id: 9,
    title: "GBIM Digital",
    status: "Live",
    description: `Full-service digital marketing agency offering digital strategies and solutions to help businesses stand out in the digital domain.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://digital.gbim.com/",
    image: "/img/projects/gbim-digital.png",
    gif: "/img/projects/gbim-digital-demo.gif",
    category: "Digital Marketing",
    year: "2025",
  },
  {
    id: 10,
    title: "GBIM SEO",
    status: "Live",
    description: `Unlock Your SEO Potential For REAL Business Growth. Target Your Ideal Audience.`,
    techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"],
    liveLink: "https://seo.gbim.com/",
    image: "/img/projects/gbim-seo.png",
    gif: "/img/projects/gbim-seo-demo.gif",
    category: "SEO",
    year: "2025",
  },
];

export const categories = [
  "All",
  "Full-Stack",
  "Education",
  "Corporate",
  "Property",
  "Architecture",
  "IT Security",
  "Digital Marketing",
  "SEO",
  "Healthcare",
  "Government / Education",
  "Government / HRMS",
];

export const years = ["All", "2023", "2024", "2025"];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "South Indian Education Society (SIES)",
    duration: "2020 - 2023",
    location: "Mumbai",
  },
  {
    degree: "HSC (12th)",
    institution: "Sai Nath Junior College",
    duration: "2018 - 2020",
    location: "Mumbai",
  },
  {
    degree: "SSC (10th)",
    institution: "Roopshree Vidhyalya",
    duration: "2018",
    location: "Mumbai",
  },
];

export const bio = {
  intro: `Front-End Developer with 2+ years of experience.
Skilled in React.js, Next.js, and modern web technologies.
Focused on clean, scalable, high-performance UI.
Experienced with Node.js, Express.js, MongoDB, and MySQL.
Able to build and collaborate on full-stack web solutions.`,
  extended:
    "Beyond frontend development, I have solid experience with backend technologies including Node.js, Express.js, MongoDB and MySQL. This full-stack knowledge allows me to build complete web solutions and collaborate effectively across all layers of development.",
  experience: "2+ years",
  technologies: "15+",
};

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "kanojiya9768@gmail.com",
    link: "mailto:kanojiya9768@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8097859158",
    link: "tel:+918097859158",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Koparkhairne, Navi Mumbai",
    link: null,
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    value: "kanojiya9768",
    link: "https://github.com/kanojiya9768",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vishal-kanojiya",
    link: "https://linkedin.com/in/vishal-kanojiya",
  },
];
