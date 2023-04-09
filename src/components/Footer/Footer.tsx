import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { devCommunity, github, linkedin } from '../../utilities/constants/URLs';
import DEVIcon from '../../utilities/svg/DEV';
import GithubIcon from '../../utilities/svg/Github';
import LinkedInIcon from '../../utilities/svg/LinkedIn';
import styles from './footer.module.scss';

export default function Footer() {
  // TODO: Figure out the hydration issue before implementing live clock
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userTime, setUserTime] = useState(new Date());

  function timeZoneAsString(date: string) {
    if (date) {
      return date.match(/\((.*)\)/); // This return an array
    }
  }

  function refreshClock() {
    setCurrentTime(new Date());
    setUserTime(new Date());
  }

  useEffect(() => {
    setInterval(refreshClock, 1000);
  }, []);

  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>&copy; {currentTime.getFullYear()} JUSTIN HOANG</p>

      <div className={styles.footerText}>
        <div>
          {currentTime !== undefined
            ? `${formatInTimeZone(currentTime, 'America/Vancouver', 'h:mm:ss a')} | ${
                timeZoneAsString(currentTime.toString())?.[1]
              }`
            : null}
          {userTime && timeZoneAsString(currentTime.toString())?.[1] !== timeZoneAsString(userTime.toString())?.[1]
            ? `&rarr; ${format(userTime, 'h:mm a')} | ${timeZoneAsString(userTime.toString())?.[1]}`
            : null}
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
