import { type LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  status?: string;
  description: string;
  techStack: string[];
  liveLink: string;
  image: string;
  gif?: string;
  demo?: string;
  category: string;
  githubLink?: string;
  year: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description?: string;
  skills: string[];
}


export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string | null;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
