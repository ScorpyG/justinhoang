import { resume } from '@/utilities/constants/URLs';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from './about.module.scss';
import techList from '@/utilities/constants/techList';

export default function About() {
  const [isProfileUrl, setProfileUrl] = useState(false);
  const headshotImgUrl = './images/profile.jpg';
  const ghostImgUrl = './images/ghost.gif';

  const biography = (
    <div className={`${styles.header}`}>
      <img
        src={isProfileUrl ? headshotImgUrl : ghostImgUrl}
        width={260}
        alt="Headshot"
        onClick={() => setProfileUrl((profileUrl) => !profileUrl)}
      />
  
      <div className={`${styles.bio}`}>
        <h1>ABOUT ME</h1>
        <p>
          I'm a software developer based in <u>Vancouver</u> with a passion for
          technology and design. I enjoy learning different technologies and
          building applications to challenge my own creativity, problem-solving,
          planning, and organization.
        </p>
        <p>
          Skills/Interests:{' '}
          <b>
            TypeScript, JavaScript, React.js, Git, NoSQL, Python, Next.js, Saas,
            Machine Learning, A.I, Robotics
          </b>
        </p>
        <br />
  
        <Link href={resume}>resume.docx</Link>
      </div>
    </div>
  );

  const technologies = (
    <div className={`${styles.technical}`}>
      <div className={`${styles.carousel}`}>
        {techList.map((technology, key) => 
          <div className={`${styles.technology}`} key={key}>
            {technology.icon}
            <h3>{technology.name}</h3>
          </div>
        )}
      </div>
    </div>
  );

  const hobbies = (
    <div className={`${styles.hobbies}`}>
      <h1>Hobbies</h1>
      <p>A bit of...insights!</p>
      
      <div className={`${styles.cards}`}>

      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <main>
        <div className={`${styles.container}`}>
          {biography}
          {technologies}
          {hobbies}
        </div>
      </main>
    </>
  );
}
