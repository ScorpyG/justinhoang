import { HobbyCardData } from '@/components/Card/HobbyCard';
import { ProjectCardData } from '@/components/Card/ProjectCard';
import BrainIcon from '../icons/BrainIcon';
import ChatIcon from '../icons/ChatIcon';
import CrownIcon from '../icons/CrownIcon';
import FanIcon from '../icons/FanIcon';

export const hobbyList: Array<HobbyCardData> = [
  {
    color: '#FBB6CE',
    icon: <BrainIcon width={'max-content'} height={'max-content'} />,
    text: `I like spending time learning different
    things outside of programming, like psychology,
    cooking and sports. Which allow me to keep on
    diversifying my pre-existing skill-sets and
    improve myself as individual.`,
  },
  {
    color: '#90cdf4',
    icon: <FanIcon width={'max-content'} height={'max-content'} />,
    text: `By combining both of my background in art and
    science help me design interactive interfaces allows
    me to illuminating and underline the beauty and the
    complexity of the world around us.`,
  },
  {
    color: '#ffa500',
    icon: <CrownIcon width={'max-content'} height={'max-content'} />,
    text: `Growing up playing video games has turned me
    into a competitive player. With some of that competitiveness
    being translated into my present working life.
    So, I always thrive towards becoming the better version of myself.`,
  },
  {
    color: '#81be83',
    icon: <ChatIcon width={'max-content'} height={'max-content'} />,
    text: `Growing up playing video games has turned me into a competitive
    player. With some of that competitiveness being translated into
    my present working life. So, I always thrive towards becoming
    the better version of myself.`,
  },
];

export const projectList: Array<ProjectCardData> = [
  {
    title: 'StudyBuddy (v.1)',
    image: '/images/studybuddy.png',
    technologies: ['Vue.js', 'Vuex', 'Springboot', 'MySQL'],
    desc: `A full-stack application that allows students to pair with other learners and educators across the globe. `,
    repoLink: 'https://github.com/ScorpyG/studybuddy-api',
    siteLink: 'https://github.com/ScorpyG/studybuddy-web',
  },
  {
    title: 'Quote Generator (v.2)',
    image: '/images/quotegen.png',
    technologies: ['TypeScript', 'Nexts.js', 'MongoDB'],
    desc: `Reworked of the 1st Full-stack application Quote generator app that allow user to view and add their own quotes.
      Using Next.js and Next API routes to handle the backend. Implement authentication and authorization with JWT.`,
    repoLink: 'https://github.com/ScorpyG/Quote-Generator',
    siteLink: 'https://scorpy-quote-gen.vercel.app/',
  },
  {
    title: "What's the weather?",
    image: '/images/weatherapp.gif',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: `The project is created with OpenWeatherMap API. Learning how to make an API request
      and resolving promises and manipulate the DOM to display requested content. Along with learning the basics of
      HTML and CSS styling.`,
    repoLink: 'https://github.com/ScorpyG/How-The-Weather',
    siteLink: 'https://scorpyg.github.io/How-The-Weather/',
  },
  {
    title: 'Ping Pong Py',
    image: '/images/pingpong.gif',
    technologies: ['Python', 'PyGame'],
    desc: 'A classic 2 players Ping Pong game created with Python package called PyGame.',
    repoLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
    siteLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
  },
  {
    title: 'Password Generator',
    image: '/images/passgen.gif',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: `Generate a random secure password within recommended length and conditions.
      Explore further on how to protect yourself on the internet. Learning DOM manipulation
      and RegEx (Regular Expression).`,
    repoLink: 'https://github.com/ScorpyG/password-generator',
    siteLink: 'https://scorpyg.github.io/password-generator/',
  },
];
