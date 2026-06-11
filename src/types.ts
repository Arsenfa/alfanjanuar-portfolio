export interface Project {
  id: string;
  title: string;
  category: 'real' | 'portfolio';
  isInternship?: boolean;
  isPersonal?: boolean;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  bannerBg: string; // Tailwind class or custom hex color
  previewUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  achievements?: string[];
  mockupType: 'warehouse' | 'checkout' | 'steam' | 'telegram' | 'kde';
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

export interface TechCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  description: string;
  tags: string[];
}
