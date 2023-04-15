import { HobbyCardData } from '@/components/Card/HobbyCard';
import { ProjectCardData } from '@/components/Card/ProjectCard';
import Brain from '../svgr/Brain';
import Chat from '../svgr/Chat';
import Crown from '../svgr/Crown';
import Fan from '../svgr/Fan';

export const hobbyList: Array<HobbyCardData> = [
  {
    color: '#ffc0cb',
    icon: <Brain />,
    text: `I like spending time learning different
    things outside of programming, like psychology,
    cooking and sports. Which allow me to keep on
    diversifying my pre-existing skill-sets and
    improve myself as individual.`,
  },
  {
    color: '#add8e6',
    icon: <Fan />,
    text: `By combining both of my background in art and
    science help me design interactive interfaces allows
    me to illuminating and underline the beauty and the
    complexity of the world around us.`,
  },
  {
    color: '#ffa500',
    icon: <Crown />,
    text: `Growing up playing video games has turned me
    into a competitive player. With some of that competitiveness
    being translated into my present working life.
    So, I always thrive towards becoming the better version of myself.`,
  },
  {
    color: '#81be83',
    icon: <Chat />,
    text: `Growing up playing video games has turned me into a competitive
    player. With some of that competitiveness being translated into
    my present working life. So, I always thrive towards becoming
    the better version of myself.`,
  },
];

export const projectList: Array<ProjectCardData> = [
  {
    title: 'Quote Generator',
    image: '/images/quotegen.gif',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    desc: 'Quote generator app that allow user to view and add their own quotes',
    repoLink: 'https://github.com/ScorpyG/Quote-Generator',
    siteLink: 'https://mern-quote-generator.netlify.app/',
  },
  {
    title: "What's the weather?",
    image: '/images/weather.gif',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: 'The project is created with OpenWeatherMap API.',
    repoLink: 'https://github.com/ScorpyG/How-The-Weather',
    siteLink: 'https://scorpyg.github.io/How-The-Weather/',
  },
  {
    title: 'Ping Pong Py',
    image: '/images/pingpong.gif',
    technologies: ['Python', 'PyGame'],
    desc: 'Ping Pong Game created with Python package called PyGame',
    repoLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
    siteLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
  },
  {
    title: 'Password Generator',
    image: '/images/passgen.gif',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: 'Generate a random secure password within recommended length and conditions. Explore further on how to protect yourself on the internet.',
    repoLink: 'https://github.com/ScorpyG/password-generator',
    siteLink: 'https://scorpyg.github.io/password-generator/',
  },
];
