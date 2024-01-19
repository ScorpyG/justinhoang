import Card from '@/components/Card';
import { resume } from '@/utilities/constants/URLs';
import techList from '@/utilities/constants/techList';
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { hobbyList } from '../../utilities/constants/cardData';
import styles from './about.module.scss';

export default function About() {
  const headshotImgUrl = '/images/profile.jpg';
  const ghostImgUrl = '/images/ghost.gif';

  const [isProfileUrl, setProfileUrl] = useState(false);
  const colorStateForDarkMode = useColorModeValue('#2E2E2E', '#FFF');
  const colorStateForLightMode = useColorModeValue('#FFF', '#2E2E2E');

  const biography = (
    <Box className={`${styles.header}`}>
      <Tilt scale={1.1} className={styles.tiltGrid}>
        <Image
          priority={true}
          src={isProfileUrl ? headshotImgUrl : ghostImgUrl}
          alt="Headshot"
          onClick={() => setProfileUrl((profileUrl) => !profileUrl)}
          width={260}
          height={260}
        />
      </Tilt>

      <Box className={`${styles.bio}`}>
        <Heading>ABOUT ME</Heading>
        <p>
          I&apos;m a software developer based in <u>Vancouver</u>. I enjoy learning different technologies and building
          applications to challenge my own creativity, problem-solving, planning, and organization.
        </p>
        <p>
          Skills/Interests:{' '}
          <b>
            TypeScript, JavaScript, React.js, Git, GraphQL, NoSQL, Python, Next.js, SaaS, Machine Learning, A.I,
            Robotics
          </b>
        </p>
        <br />

        <Link
          href={resume}
          target="_blank"
          textDecoration={'none'}
          padding={'10px 25px'}
          border={'2px solid'}
          borderRadius={'30px'}
          transitionDuration={'.3s'}
          fontWeight={'bold'}
          _hover={{
            borderColor: colorStateForDarkMode,
            color: colorStateForLightMode,
            backgroundColor: colorStateForDarkMode,
          }}
        >
          resume.docx
        </Link>
      </Box>
    </Box>
  );

  const technologies = (
    <div className={`${styles.technical}`}>
      <div className={`${styles.carousel}`}>
        {techList?.map((technology, key) => (
          <Flex className={`${styles.technology}`} key={key}>
            {technology.icon}
            <Heading as={'h3'} size={'md'}>
              {technology.name}
            </Heading>
          </Flex>
        ))}
      </div>
    </div>
  );

  const tools = (
    <Flex flexDirection="column" className={`${styles.toolbar}`}>
      <Heading>Tools</Heading>
      <Text>My development toolkit</Text>
      <Flex className={`${styles.tools}`}>
        <Image src="/images/vscode.png" width={50} height={50} alt="vscode logo" />
        <Image src="/images/figma.png" width={30} height={50} alt="Figma logo" />
        <Image src="/images/git.png" width={50} height={50} alt="Git logo" />
        <Image
          src={useColorModeValue('/images/github-mark.png', '/images/github-mark-white.png')}
          width={50}
          height={50}
          alt="Github logo"
        />
        <Image src="/images/notion.png" width={50} height={50} alt="Notion logo" />
        <Image
          src={useColorModeValue('/images/apple.png', '/images/apple-white.png')}
          width={50}
          height={50}
          alt="Apple logo"
        />
        <Image src="/images/win10.png" width={50} height={50} alt="window logo" />
      </Flex>
    </Flex>
  );

  const hobbies = (
    <Box textAlign="center" mb={'8'}>
      <Heading>Hobbies</Heading>
      <Text>A bit of...insights!</Text>

      <Flex gap="20px" mt="8" flexWrap={'wrap'} justifyContent={'center'}>
        {hobbyList.length > 0 ? (
          hobbyList?.map((hobby, index) => <Card type="HobbyCard" key={index} hobbyData={hobby} />)
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
