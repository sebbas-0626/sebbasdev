import { TableRow } from "@sanity/table";
import { PortableTextBlock } from "sanity";

export interface Table {
  rows?: TableRow[];
  title?: string;
}

export interface TableValueProps {
  table?: Table;
  caption?: string;
}

export interface QuizValueProps {
  _key: string;
  question: string;
  answer: string;
}

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  og: string;
  usage: PortableTextBlock[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo?: string;
  url?: string;
  description: string;
  startDate: string;
  endDate?: string;
  meta?: string;
  contract?: string;
  highlights?: string[];
  technologies?: string[];
};

export type EducationType = {
  _id: string;
  title: string;
  institution: string;
  location?: string;
  year: number;
  description?: string;
  inProgress?: boolean;
};

export type SkillType = {
  name: string;
  logo?: string;
};

export type SkillGroupType = {
  category: string;
  skills: SkillType[];
};

export type LanguageType = {
  _id: string;
  name: string;
  level: string;
  scale?: number;
  note?: string;
};

export type ReferenceType = {
  _id: string;
  name: string;
  role: string;
  location?: string;
  phone?: string;
  email?: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo?: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  gallery?: string[];
  description: PortableTextBlock[];
};

export type PostType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  canonicalLink?: string;
  date?: string;
  coverImage: {
    image: string;
    lqip: string;
    alt: string | null;
  };
  tags: string[];
  author: {
    name: string;
    photo: {
      image: string;
      alt: string;
    };
    twitterUrl: string;
  };
  body: PortableTextBlock[];
  featured: boolean;
  isPublished: boolean;
};

export type HeroeType = {
  _id: string;
  _createdAt: string;
  name: string;
  url: string;
  met: boolean;
};
