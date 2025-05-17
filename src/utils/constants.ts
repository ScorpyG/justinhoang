import { StaticImageData } from 'next/image';
import AirbleLogo from '../../public/images/airble.png';
import BenevityLogo from '../../public/images/benevity.png';
import PasswordGeneratorMedia from '../../public/images/passgen.gif';
import PingPingMedia from '../../public/images/pingpong.gif';
import QuoteGenMedia from '../../public/images/quotegen.png';
import SpairMedia from '../../public/images/spair.png';
import StudyBuddyMedia from '../../public/images/studybuddy.png';
import WeatherAppMedia from '../../public/images/weatherapp.gif';

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Neo4j',
  'GraphQL',
  'REST',
  'HTML',
  'CSS',
  'Tailwind',
  'SASS',
  'Git',
  'Figma',
  'Python',
  'Java',
  'C++',
  'AWS',
  'Docker',
];

export const experiences = [
  {
    title: 'Software Developer Intern',
    media: BenevityLogo,
    company: 'Benevity Inc.',
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-08-30'),
    description: `Developed Vue.js components with Jest unit testing, ensuring 100% test coverage for new features. 
    Developed content prioritization feature serving global clients, driving 20% improvement in user efficiency. 
    Managed code versioning and collaboration through Git and BitBucket, following industry best practices. 
    Implemented component testing framework using Cypress and Storybook, maintaining design system consistency.`,
  },
  {
    title: 'Full Stack Developer Intern',
    media: AirbleLogo,
    company: 'Airble Aviation Inc.',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-30'),
    description: `Created technical documentation highlighting Segment implementation, which improved onboarding efficiency. 
    Refactored responsive landing pages using React and TypeScript, achieving 15% increase in SEO performance. 
    Engineered GraphQL APIs and MySQL queries for flight data optimization, eliminating duplicate and improving data accuracy. 
    Integrate Segment CDP to the marketplace product, resulting in 25% improvement in tracking accuracy in Google Analytics and Google Ads.`,
  },
  {
    title: 'Founder',
    media: null,
    company: 'Spair',
    startDate: new Date('2024-09-01'),
    endDate: null,
    description: `Designed and engineered the architecture of an education platform that enables thousands of students to connect and collaborate with Next.js, TailwindCSS. 
    Designed and implemented recommendation systems that focus on connecting people with similar backgrounds using Apollo GraphQL, Prisma and PostgreSQL. 
    Integrated systems with Clerk and Stripe, and automated webhooks enable consistent and seamless transition between operations and premium features. 
    Integrated AI capabilities with OpenAI, Anthropic and Qdrant to help improve active recall learning and information retention. 
    Developed real-time collaboration and peer-to-peer communication features with WebRTC and CRDT. Designed and integrated email invite system with MailerSend service enabling seamless communication.`,
  },
];

export interface Project {
  title: string;
  source: string;
  description: string;
  technologies: Array<string>;
  media: StaticImageData;
}

export const projects: Array<Project> = [
  {
    title: 'Spair',
    media: SpairMedia,
    source: 'https://spair.app',
    description: `Designed and engineered the architecture of an education platform that enables thousands of students 
    to connect and collaborate with Next.js, TailwindCSS and Apollo GraphQL.`,
    technologies: [
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'GraphQL',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'Stripe',
      'OpenAI',
      'Anthropic',
      'Qdrant',
    ],
  },
  {
    title: 'QuoteGen',
    media: QuoteGenMedia,
    source: 'https://github.com/ScorpyG/Quote-Generator',
    description: `Reworked of the 1st Full-stack application Quote generator app that allow user to view and add their own quotes. 
    Using Next.js and Next API routes to handle the backend. Implement authentication and authorization with JWT.`,
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS'],
  },
  {
    title: 'StudyBuddy (v.1)',
    media: StudyBuddyMedia,
    source: 'https://github.com/ScorpyG/studybuddy-api',
    description: `A full-stack application that allows students to pair with other learners and educators across the globe.`,
    technologies: ['Vue.js', 'SpringBoot', 'MySQL'],
  },
  {
    title: `What's the weather?`,
    media: WeatherAppMedia,
    source: 'https://github.com/ScorpyG/How-The-Weather',
    description: `The project is created with OpenWeatherMap API. Learning how to make an API request and 
    resolving promises and manipulate the DOM to display requested content. Along with learning the basics of HTML and CSS styling.`,
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: `Password Generator`,
    media: PasswordGeneratorMedia,
    source: 'https://github.com/ScorpyG/password-generator',
    description: `Generate a random secure password within recommended length and conditions. 
    Explore further on how to protect yourself on the internet. Learning DOM manipulation and RegEx (Regular Expression).`,
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: `Ping Pong`,
    media: PingPingMedia,
    source: 'https://github.com/ScorpyG/Ping-Pong-Py',
    description: `A classic 2 players Ping Pong game created with Python package called PyGame.`,
    technologies: ['Python', 'PyGame'],
  },
];
