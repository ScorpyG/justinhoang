import Link from 'next/link';
import { useState } from 'react';

import CloseIcon from '../../utilities/svg/Close';
import DarkLogo from '../../utilities/svg/DarkLogo';
import MenuIcon from '../../utilities/svg/Hamburger';
import LightBulb from '../../utilities/svg/Lightbulb';
import PaperPlane from '../../utilities/svg/PaperPlane';
import Profile from '../../utilities/svg/Profile';
import styles from './topnavbar.module.scss';

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routeUrls = [
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

  const navMenu = (
    <ul className={styles.nav}>
      {routeUrls.map((route, index) => {
        return (
          <li onClick={() => setMenuOpen((menuOpen) => !menuOpen)} key={index}>
            <Link href={`${route.url}`}>
              {route.icon} {route.pageName}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <DarkLogo />
        </Link>
      </div>
      <div className={styles.menu}>
        <div
          className={styles.hamburger}
          onClick={() => {
            setMenuOpen((menuOpen) => !menuOpen);
          }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        {menuOpen ? navMenu : undefined}
      </div>
    </div>
  );
}
