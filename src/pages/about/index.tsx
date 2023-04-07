import { resume } from '@/utilities/constants/URLs';
import techList from '@/utilities/constants/techList';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { hobbyList } from '../../utilities/constants/cardData';
import styles from './about.module.scss';

// images
import Card from '@/components/Card';
import apple from '../../../public/images/apple.png';
import figma from '../../../public/images/figma.png';
import ghostImgUrl from '../../../public/images/ghost.gif';
import git from '../../../public/images/git.png';
import github from '../../../public/images/github.png';
import notion from '../../../public/images/notion.png';
import headshotImgUrl from '../../../public/images/profile.jpg';
import vscode from '../../../public/images/vscode.png';
import window from '../../../public/images/win10.png';

export default function About() {
  const [isProfileUrl, setProfileUrl] = useState(false);

  const biography = (
    <div className={`${styles.header}`}>
      <Image
        src={isProfileUrl ? headshotImgUrl : ghostImgUrl}
        width={260}
        height={260}
        alt="Headshot"
        onClick={() => setProfileUrl((profileUrl) => !profileUrl)}
      />

      <div className={`${styles.bio}`}>
        <h1>ABOUT ME</h1>
        <p>
          I&apos;m a software developer based in <u>Vancouver</u> with a passion for technology and design. I enjoy
          learning different technologies and building applications to challenge my own creativity, problem-solving,
          planning, and organization.
        </p>
        <p>
          Skills/Interests:{' '}
          <b>TypeScript, JavaScript, React.js, Git, NoSQL, Python, Next.js, Saas, Machine Learning, A.I, Robotics</b>
        </p>
        <br />

        <Link href={resume} target="_blank">
          resume.docx
        </Link>
      </div>
    </div>
  );

  const technologies = (
    <div className={`${styles.technical}`}>
      <div className={`${styles.carousel}`}>
        {techList.map((technology, key) => (
          <div className={`${styles.technology}`} key={key}>
            {technology.icon}
            <h3>{technology.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  const tools = (
    <div className={`${styles.toolbar}`}>
      <h1>Tools</h1>
      <p>My development toolkit</p>
      <div className={`${styles.tools}`}>
        <Image src={vscode} width={50} height={50} alt="vscode logo" />
        <Image src={figma} width={30} height={50} alt="Figma logo" />
        <Image src={git} width={50} height={50} alt="Git logo" />
        <Image src={github} width={50} height={50} alt="Github logo" />
        <Image src={notion} width={50} height={50} alt="Notion logo" />
        <Image src={apple} width={50} height={50} alt="Apple logo" />
        <Image src={window} width={50} height={50} alt="window logo" />
      </div>
    </div>
  );

  const hobbies = (
    <div className={`${styles.hobbies}`}>
      <h1>Hobbies</h1>
      <p>A bit of...insights!</p>

      <div className={`${styles.cards}`}>
        {hobbyList.length > 0 ? (
          hobbyList.map((hobby, index) => <Card type="HobbyCard" key={index} hobbyData={hobby} />)
        ) : (
          <h1>No Card Available!</h1>
        )}
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
          {tools}
          {hobbies}
        </div>
      </main>
    </>
  );
}
