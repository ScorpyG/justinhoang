import { StaticImageData } from 'next/image';

export type WorkExperience = {
  role: string;
  link?: string;
  media: StaticImageData;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: Array<string>;
};

export type Project = {
  title: string;
  media: StaticImageData;
  source: string;
  description: string;
  technologies: Array<string>;
};
