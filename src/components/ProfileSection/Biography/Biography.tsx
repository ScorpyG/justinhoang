import { resume } from '@/utilities/constants/URLs';
import { Link } from '@chakra-ui/next-js';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './bio.module.scss';

export default function Biography() {
  const headshotImgUrl = '/images/profile.jpg';
  const ghostImgUrl = '/images/ghost.gif';

  const [isProfileUrl, setProfileUrl] = useState(false);
  const colorStateForDarkMode = useColorModeValue('#2E2E2E', '#FFF');
  const colorStateForLightMode = useColorModeValue('#FFF', '#2E2E2E');

  return (
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
}
