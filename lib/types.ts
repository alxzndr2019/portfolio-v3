export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  architecture?: string;
  highlights: string[];
};

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string[];
  achievements?: string[];
}

export interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Professional" | "Intermediate" | "Basic";
  flag?: string;
}
