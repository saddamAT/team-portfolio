export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
  phone?: string;
}

export interface PersonalInfo {
  name: string;
  initials?: string;
  role: string;
  secondaryTitle?: string;
  headline: string;
  shortBio: string;
  aboutText?: string[];
  email: string;
  phone?: string;
  location: string;
  status: string;
  hireable?: boolean;
  avatarUrl?: string;
  resumeUrl?: string;
  highlights: string[];
  socials: SocialLinks;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  company?: string;
  period?: string;
  category?: string;
  flagshipBadge?: string;
  techStack: string[];
  problem: string;
  solution?: string;
  contributions: string[];
  architectureFlow?: {
    step: string;
    description: string;
    subtext: string;
  }[];
  impact?: {
    metric: string;
    label: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  active?: boolean;
  employmentType?: string;
  summary?: string;
  bulletPoints: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  icon?: string;
  skills: string[];
  featuredSkills?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  period?: string;
  credentialUrl?: string;
}

export interface EngineeringPhilosophyItem {
  number: string;
  title: string;
  tag: string;
  description: string;
}

export interface BlueprintStep {
  stepNumber: string;
  title: string;
  tech: string;
  description: string;
  highlight?: boolean;
}

export interface ArchitectureBlueprint {
  badge: string;
  title: string;
  description: string;
  steps: BlueprintStep[];
  codeSnippets?: {
    language: string;
    label: string;
    filename: string;
    code: string;
  }[];
  simulationConfig?: {
    buttonLabel: string;
    diagnosticTitle?: string;
    diagnosticSubtext?: string;
    benchmarkHeader?: string;
    benchmarkValue?: string;
    stepStatusSuccess?: string;
    summaryText?: string;
    statusText?: string;
    totalLatencyMs?: number;
    sampleData?: Record<string, unknown>;
  };
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  projectTitle?: string;
  category: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  role?: string;
  challenges?: string[];
  solutions?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  subTitle: string;
  description: string;
  avatarUrl: string;
  coverUrl?: string;
  hireable?: boolean;
  featuredSkills: string[];
  portfolioId: string;
  colorTheme?: {
    bg: string;
    ring: string;
  };
}

export interface ContactConfig {
  headline?: string;
  subtext?: string;
  availableNotice?: string;
  projectTypes?: string[];
  budgetOptions?: string[];
}

export interface PortfolioData {
  id: string;
  personal: PersonalInfo;
  metrics: MetricItem[];
  caseStudies: CaseStudy[];
  projectGallery?: ProjectGalleryItem[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  education?: EducationItem[];
  certifications?: CertificationItem[];
  philosophies?: EngineeringPhilosophyItem[];
  blueprint?: ArchitectureBlueprint;
  contactConfig?: ContactConfig;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  targetName?: string;
  targetEmail?: string;
}

export interface ActionResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  submissionId?: string;
}

export interface PipelineStep {
  step: number;
  name: string;
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'PASSED' | 'FLAGGED';
  latencyMs: number;
  details: string;
}

export interface PipelineExecutionResult {
  executionId: string;
  status: string;
  totalLatencyMs: number;
  steps: PipelineStep[];
  summary: string;
}
