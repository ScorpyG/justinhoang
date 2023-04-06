import { HobbyCardProps } from '@/components/Card/HobbyCard';

// svgs
import Brain from '../svg/Brain';
import Chat from '../svg/Chat';
import Crown from '../svg/Crown';
import Fan from '../svg/Fan';

export const hobbyList: Array<HobbyCardProps> = [
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
