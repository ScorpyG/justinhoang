import Brain from '../svg/Brain';
import Chat from '../svg/Chat';
import Crown from '../svg/Crown';
import Fan from '../svg/Fan';
import { HobbyCardData, ProjectCardData } from '../type/types';

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
    image:
      'https://media0.giphy.com/media/gtnWcZlcBbz5p6dcYo/giphy.gif?cid=790b7611850c5a5164b5f703fb91ad4450757e943fddc972&rid=giphy.gif&ct=g',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    desc: 'Quote generator app that allow user to view and add their own quotes',
    repoLink: 'https://github.com/ScorpyG/Quote-Generator',
    siteLink: 'https://mern-quote-generator.netlify.app/',
  },
  {
    title: "What's the weather?",
    image:
      'https://media0.giphy.com/media/mYBYX9kp4C7OVRJMYg/giphy.gif?cid=790b76119cfb623eecb11e82f4deb2f96a92b4c4d5b0c86d&rid=giphy.gif&ct=g',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: 'The project is created with OpenWeatherMap API.',
    repoLink: 'https://github.com/ScorpyG/How-The-Weather',
    siteLink: 'https://scorpyg.github.io/How-The-Weather/',
  },
  {
    title: 'Ping Pong Py',
    image:
      'https://media2.giphy.com/media/4O05pLjLn4HEVdrcrJ/giphy.gif?cid=790b76110ef9a3a0445b4809ebf6c695879eabceb235f460&rid=giphy.gif&ct=g',
    technologies: ['Python', 'PyGame'],
    desc: 'Ping Pong Game created with Python package called PyGame',
    repoLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
    siteLink: 'https://github.com/ScorpyG/Ping-Pong-Py',
  },
  {
    title: 'Password Generator',
    image:
      'https://media2.giphy.com/media/qlU5rvYTjizDaHrA9k/giphy.gif?cid=790b76118aaa1fabf782b72fdffcdd4dbfb0605f3113ee72&rid=giphy.gif&ct=g',
    technologies: ['HTML', 'CSS', 'JS'],
    desc: 'Generate a random secure password within recommended length and conditions. Explore further on how to protect yourself on the internet.',
    repoLink: 'https://github.com/ScorpyG/password-generator',
    siteLink: 'https://scorpyg.github.io/password-generator/',
  },
];
