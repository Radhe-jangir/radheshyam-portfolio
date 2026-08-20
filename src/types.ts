export type ProjectCategory = 'ALL' | 'AI / ML' | 'DATA ANALYTICS' | 'FULL STACK' | 'PYTHON';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  categories: Array<'AI / ML' | 'DATA ANALYTICS' | 'FULL STACK' | 'PYTHON'>;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  approach: string[];
  architecture: string[];
  metrics?: ProjectMetric[];
  githubUrl: string;
  liveDemoUrl: string;
  isFeatured: boolean;
  playgroundType?: 'sentiment' | 'regression' | 'dataset' | 'sustainability' | 'vision' | 'algorithmic';
  stars?: number;
  featuredOrder?: number;
}

export interface SkillItem {
  name: string;
  badge?: string;
  isPrimary?: boolean;
}

export interface TechCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Ambassador' | 'Leadership' | 'Internship' | 'Fellowship';
  description: string;
  highlights: string[];
  location?: string;
  skillsAcquired?: string[];
  technologies?: string[];
  impactMetric?: string;
  isEditablePlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: 'Verified' | 'Completed' | 'In Progress';
  description: string;
  skillsCovered: string[];
  credentialId?: string;
  issueDate?: string;
  verifyLink?: string;
  isEditable?: boolean;
  badgeColor?: string;
  credentialLevel?: 'Advanced' | 'Professional' | 'Specialist' | 'Foundational';
  curriculumHighlights?: string[];
}

export interface WhyMeItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  badge?: string;
}

export interface CurrentFocusItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: 'Active Exploration' | 'Core Focus' | 'Research & Dev';
}

export interface RecruiterEvaluationRole {
  id: string;
  title: string;
  fitScore: number;
  keyStrengths: string[];
  recommendedProjects: string[];
  matchedSkills: string[];
  readinessSummary: string;
}

