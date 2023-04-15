import Card from '@/components/Card';
import { resume } from '@/utilities/constants/URLs';
import techList from '@/utilities/constants/techList';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { hobbyList } from '../../utilities/constants/cardData';
import styles from './about.module.scss';

export default function About() {
  const headshotImgUrl = '/images/profile.jpg';
  const ghostImgUrl = '/images/ghost.gif';

  const [isProfileUrl, setProfileUrl] = useState(false);

  const biography = (
    <div className={`${styles.header}`}>
      <Tilt scale={1.1} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
          src={isProfileUrl ? headshotImgUrl : ghostImgUrl}
          alt="Headshot"
          onClick={() => setProfileUrl((profileUrl) => !profileUrl)}
          width={260}
          height={260}
        />
      </Tilt>

      <Box className={`${styles.bio}`}>
        <Heading as="h1">ABOUT ME</Heading>
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
      </Box>
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
    <Flex flexDirection="column" className={`${styles.toolbar}`}>
      <Heading as="h1">Tools</Heading>
      <Text>My development toolkit</Text>
      <Flex className={`${styles.tools}`}>
        <Image src="/images/vscode.png" width={50} height={50} alt="vscode logo" />
        <Image src="/images/figma.png" width={30} height={50} alt="Figma logo" />
        <Image src="/images/git.png" width={50} height={50} alt="Git logo" />
        <Image src="/images/github.png" width={50} height={50} alt="Github logo" />
        <Image src="/images/notion.png" width={50} height={50} alt="Notion logo" />
        <Image src="/images/apple.png" width={50} height={50} alt="Apple logo" />
        <Image src="/images/win10.png" width={50} height={50} alt="window logo" />
      </Flex>
    </Flex>
  );

  const hobbies = (
    <Box className={`${styles.hobbies}`} textAlign="center">
      <Heading as="h1">Hobbies</Heading>
      <Text>A bit of...insights!</Text>

      <Flex className={`${styles.cards}`} gap="20px">
        {hobbyList.length > 0 ? (
          hobbyList.map((hobby, index) => <Card type="HobbyCard" key={index} hobbyData={hobby} />)
        ) : (
          <h1>No Card Available!</h1>
        )}
      </Flex>
    </Box>
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
