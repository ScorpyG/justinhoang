import { formatInTimeZone } from 'date-fns-tz';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { devCommunity, github, linkedin } from '../../utilities/constants/URLs';
import DEVIcon from '../../utilities/svgr/DEV';
import GithubIcon from '../../utilities/svgr/Github';
import LinkedInIcon from '../../utilities/svgr/LinkedIn';
import styles from './footer.module.scss';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  function timeZoneAsString(date: string) {
    if (date) {
      return date.match(/\((.*)\)/); // This return an array
    }
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>&copy; {currentTime.getFullYear()} JUSTIN HOANG</p>

      <div className={styles.footerText}>
        <div>
          {`${formatInTimeZone(currentTime, 'America/Vancouver', 'h:mm:ss a')} | ${
            timeZoneAsString(currentTime.toString())?.[1]
          }`}
        </div>
      </div>

      <div className={styles.media}>
        <Link href={github} target="_blank">
          <GithubIcon />
        </Link>
        <Link href={linkedin} target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href={devCommunity} target="_blank">
          <DEVIcon />
        </Link>
      </div>
    </div>
  );
}
