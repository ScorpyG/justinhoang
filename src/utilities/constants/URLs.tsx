import LightBulb from '../svgr/Lightbulb';
import PaperPlane from '../svgr/PaperPlane';
import Profile from '../svgr/Profile';

// professional
export const resume =
  'https://docs.google.com/document/d/1__VXh_jdY7ULvg9cxh5o-OTXCchmGNDhFlajnDKWDE8/edit?usp=sharing';

// social media
export const github = 'https://github.com/ScorpyG';
export const linkedin = 'https://www.linkedin.com/in/justin-gia-hoang/';
export const devCommunity = 'https://dev.to/scorpyg';

export const routeUrls = [
  {
    pageName: 'About',
    icon: <Profile />,
    url: '/about',
  },
  {
    pageName: 'Projects',
    icon: <LightBulb />,
    url: '/projects',
  },
  {
    pageName: 'Contact',
    icon: <PaperPlane />,
    url: '/contact',
  },
];
