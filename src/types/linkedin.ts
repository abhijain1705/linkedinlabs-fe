/* eslint-disable @typescript-eslint/no-explicit-any */
// LinkedIn Profile Analysis Interface

export interface ScoreBreakdown {
  profileCompleteness: string;
  professionalQuality: string;
  activityLevel: string;
}

export interface Experience {
  company_name: string;
  job_title?: string;
  duration?: string;
  description?: string;
  company_image?: string;
}

export interface Education {
  institution_name: string;
  degree?: string;
  field_of_study?: string;
  duration?: string;
}

export interface Certification {
  title: string;
  issuer?: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  description: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface Course {
  title: string;
  institution: string;
}

export interface ContactInfo {
  email: string;
  website: string;
  linkedin_url: string;
}

export interface OptimizedLinkedInProfile {
  headline: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications: Certification[];
  projects: Project[];
  languages: string[];
  volunteering: Volunteering[];
  awards: Award[];
  courses: Course[];
  contact_info: ContactInfo;
}

export interface PersonProfile {
  link: string;
  name: string;
  summary: string;
  location: string;
}

export interface Description {
  description1: string;
  description1_link: string;
  description2: string;
  description2_link: string;
  description3: string;
  description3_link: string;
}

export interface OriginalProfile {
  fullName: string;
  linkedin_internal_id: string;
  first_name: string;
  last_name: string;
  public_identifier: string;
  background_cover_image_url: string;
  profile_photo: string;
  headline: string;
  location: string;
  about: string;
  experience: Experience[];
  education: Education[];
  articles: any[];
  description: Description;
  activities: any[];
  volunteering: any[];
  certification: any[];
  people_also_viewed: PersonProfile[];
  similar_profiles: PersonProfile[];
  recommendations: any[];
  publications: any[];
  courses: any[];
  languages: any[];
  organizations: any[];
  projects: any[];
  awards: any[];
  score: any[];
}

export interface LinkedInAnalysisData {
  totalScore: string;
  chancesToGetHired: string;
  scoreBreakdown: ScoreBreakdown;
  strengths: string[];
  improvements: string[];
  connectionMessages: string[];
  optimizedLinkedinProfile: OptimizedLinkedInProfile;
  original: OriginalProfile;
}

export interface AIResponse {
  message: string;
  data: LinkedInAnalysisData;
}
