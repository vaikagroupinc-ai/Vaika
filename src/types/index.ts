export type DivisionKey =
  | 'estate'
  | 'agent'
  | 'data-ai'
  | 'digital-marketing'
  | 'studio'
  | 'ai';

export interface ServiceDetail {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  explanation: string;
  includes: string[];
  problemSolved: string;
  deliverables: string[];
  divisionKey: 'estate' | 'agent' | 'data-ai' | 'digital-marketing';
  badge?: string;
  turnaround?: string;
  detailRoute?: string;
  seoTitle?: string;
  metaDescription?: string;
  primaryKeywords?: string[];
  secondaryKeywords?: string[];
  overviewParagraphs?: string[];
  processSteps?: {
    title: string;
    description: string;
  }[];
  applications?: string[];
  qaApproach?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  originalServices?: string[];
  longTailKeywords?: string[];
  semanticKeywords?: string[];
  searchIntent?: string;
  platformsTools?: string[];
  optionalAddOns?: string[];
  h1Heading?: string;
  suggestedH2s?: string[];
  imageAlt?: string;
  recommendedInternalLinks?: {
    label: string;
    href: string;
  }[];
}

export interface DivisionCategoryGroup {
  id: string;
  title: string;
  description: string;
  services: ServiceDetail[];
}

export interface DemonstrationGalleryItem {
  id: string;
  title: string;
  caption?: string;
  src?: string;
  alt: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
  expectedAssetPath?: string;
  assetRole?: string;
}

export interface DemonstrationBeforeAfterPair {
  id: string;
  title: string;
  caption?: string;
  originalSrc: string;
  originalAlt: string;
  originalLabel?: string;
  finalSrc: string;
  finalAlt: string;
  finalLabel?: string;
}

export interface DemonstrationProjectDetails {
  deliverableSpec?: string;
  turnaround?: string;
  pipeline?: string;
  scopeSummary?: string;
}

export interface DemonstrationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt?: string;
  badge: string;
  tags: string[];
  gallery?: DemonstrationGalleryItem[];
  beforeAfterPairs?: DemonstrationBeforeAfterPair[];
  projectDetails?: DemonstrationProjectDetails;
}

export interface ServiceDivisionData {
  key: 'estate' | 'agent' | 'data-ai' | 'digital-marketing';
  code: string;
  title: string;
  divisionLabel: string;
  tagline: string;
  positioning: string;
  intro: {
    headline: string;
    subheadline: string;
    whatWeDo: string;
    whoWeServe: string;
    problemsAddressed: string;
    whyValuable: string;
  };
  accentColor: string;
  accentSecondary: string;
  accentBg: string;
  accentBorder: string;
  route: string;
  heroBadge: string;
  telemetryTag: string;
  categories: DivisionCategoryGroup[];
  workflow: {
    step: string;
    title: string;
    description: string;
    deliverable: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  demonstrations: DemonstrationItem[];
}

export interface DivisionInfo {
  key: DivisionKey;
  code: string;
  title: string;
  sector: string;
  tagline: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  description: string;
  badge: string;
  subTag: string;
  image: string;
  imageAlt: string;
  tags: string[];
  services: string[];
  version: string;
  route: string;
}

export interface EstateServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface EstateProjectItem {
  id: string;
  title: string;
  propertyType: string;
  client: string;
  location: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string;
  image: string;
  gallery: string[];
  metrics: { label: string; value: string }[];
  tag: string;
}

export interface StudioServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  software: string[];
  deliverables: string[];
}

export interface StudioProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  wireframeImage: string;
  clayImage: string;
  renderImage: string;
  polyCount: string;
  engine: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
}

export interface AiServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  capabilities: string[];
}

export interface AiProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  problem: string;
  solution: string;
  technology: string[];
  architectureFlow: string[];
  results: string;
  image: string;
  metrics: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: DivisionKey;
  divTag: string;
  color: string;
  badge1: string;
  badge2: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  outcome: string;
  techSpecs?: string;
  metrics?: { label: string; value: string }[];
  route?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: DivisionKey;
  stack: string;
  dotColor: string;
  image: string;
  shortBio: string;
  fullBio: string;
  credentials: string[];
  awards?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  audioMemoId?: string;
  duration?: string;
  division: DivisionKey;
  avatar?: string;
  videoUrl?: string;
  videoPoster?: string;
  tag?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface TelemetryData {
  fps: number;
  vram: string;
  drawCalls: number;
  polyCount: string;
  computeNode: string;
  latLong: string;
  engine: string;
}
