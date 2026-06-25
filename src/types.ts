export type Mode = 'developer' | 'sales';

export interface Project {
  id: string;
  title: string;
  category?: 'real' | 'portfolio';
  isInternship?: boolean;
  isPersonal?: boolean;
  badgeLabel?: string; // overrides the default card/modal badge text
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tagsLabel?: string; // section label for tags inside the modal
  bannerBg: string; // Tailwind class or custom hex color
  previewUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  challengesLabel?: string; // modal heading for the challenges column
  achievements?: string[];
  achievementsLabel?: string; // modal heading for the achievements column
  mockupType: 'warehouse' | 'checkout' | 'steam' | 'telegram' | 'kde' | 'sales';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string; // 'Internship' | 'Full-time' etc.
  descriptionTitle: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  id: string;
  school: string;
  program: string;
  location?: string;
  period: string;
  gpa?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  description: string;
  tags: string[];
}

export interface AboutContent {
  intro: string;
  secondary: string;
  whatIDo: { icon: string; label: string }[];
}

export interface ProjectGroup {
  id: string;
  heading: string;
  subtitle: string;
  cols: 2 | 3; // grid columns at desktop
  projects: Project[];
}

export interface TechStackContent {
  heading: string;
  subtitle: string;
  categories: TechCategory[];
}

export interface AvailabilityContent {
  headline: string;
  subtext: string;
}

export interface ModeContent {
  hero: { role: string; tagline: string };
  about: AboutContent;
  projectGroups: ProjectGroup[];
  experiences: Experience[];
  education: Education[];
  techStack: TechStackContent;
  availability: AvailabilityContent;
}
