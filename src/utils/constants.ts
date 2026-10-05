import SpairScreenshot from '~/images/spair-quiz-feat-dark.jpg';
import AirbleLogo from '~/logos/airble.png';
import BenevityLogo from '~/logos/benevity.png';
import BuildBaneLogo from '~/logos/buildbane.png';
import { type Project, type WorkExperience } from './types';

export const SKILLS = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'React',
  'Vue',
  'Next',
  'Node',
  'Express',
  'Prisma',
  'Redis',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Neo4j',
  'GraphQL',
  'REST',
  'HTML',
  'CSS',
  'SASS',
  'TailwindCSS',
  'Git',
  'Figma',
  'AWS',
  'Docker',
  'Upstash',
  'DigitalOcean',
  'Railway',
  'Arduino',
];

export const WORK_EXPERIENCES: Array<WorkExperience> = [
  {
    role: 'Software Developer Intern',
    link: 'https://benevity.com',
    media: BenevityLogo,
    company: 'Benevity',
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-08-30'),
    description: `Developed Vue.js components with Jest unit testing, ensuring 100% test coverage for new features. 
      Developed content prioritization feature serving global clients, driving 20% improvement in user efficiency. 
      Managed code versioning and collaboration through Git and BitBucket, following industry best practices. 
      Implemented component testing framework using Cypress and Storybook, maintaining design system consistency.`,
    technologies: [
      'Vue',
      'JavaScript',
      'Jest',
      'Cypress',
      'Storybook',
      'MongoDB',
      'Git',
      'REST',
      'CSS',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    link: 'https://airble.com',
    media: AirbleLogo,
    company: 'Airble',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-30'),
    description: `Created technical documentation highlighting Segment implementation, which improved onboarding efficiency. 
      Refactored responsive landing pages using React and TypeScript, achieving 15% increase in SEO performance. 
      Engineered GraphQL APIs and MySQL queries for flight data optimization, eliminating duplicate and improving data accuracy. 
      Integrate Segment CDP to the marketplace product, resulting in 25% improvement in tracking accuracy in Google Analytics and Google Ads.`,
    technologies: [
      'React',
      'React Native',
      'Next',
      'Node',
      'Express',
      'TypeScript',
      'Jest',
      'Prisma',
      'MySQL',
      'GraphQL',
      'SASS',
    ],
  },
  {
    role: 'Founding Engineer',
    link: 'https://buildbane.com',
    media: BuildBaneLogo,
    company: 'BuildBane',
    startDate: new Date('2025-04-02'),
    description: `Co-founded a platform that connects entrepreneurs with builders, helping them kickstart their projects and ideas. 
      Led architecture design and development of 10+ new features. 
      Oversaw the development and maintenance of the products, technical documentation and workflows. 
      Analyzed user feedback and implemented improvements, resulting in a 30% increase in user engagement. 
      Planned, tracked and managed deliverables using Agile methodologies, ensuring timely delivery of features and bug fixes of more than
      20 sprints and +10 deployments.`,
    technologies: [],
  },
];

export const PROJECTS: Array<Project> = [
  {
    title: 'Spair',
    media: SpairScreenshot,
    source: `https://www.spair.app`,
    description: `An AI-powered education platform that helps students learn and connect with others.`,
    technologies: [
      'AI SDK',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'React',
      'GraphQL',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Upstash Vector',
      'Upstash Workflow',
      'Vercel',
      'TRPC',
      'Resend',
    ],
  },
];
