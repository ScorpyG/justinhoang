import LightBulbIcon from '../icons/LightbulbIcon';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';
import ProfileIcon from '../icons/ProfileIcon';

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
    icon: <ProfileIcon boxSize={6} />,
    url: '/about',
  },
  {
    pageName: 'Projects',
    icon: <LightBulbIcon boxSize={6} />,
    url: '/projects',
  },
  {
    pageName: 'Contact',
    icon: <PaperPlaneIcon boxSize={6} />,
    url: '/contact',
  },
];
