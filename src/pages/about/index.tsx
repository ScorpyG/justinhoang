import Biography from '@/components/ProfileSection/Biography/Biography';
import Hobbies from '@/components/ProfileSection/Hobbies/Hobbies';
import Technologies from '@/components/ProfileSection/Technologies/Technologies';
import Tools from '@/components/ProfileSection/Tools/Tools';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import styles from './about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <main>
        <Box className={`${styles.container}`}>
          <Biography />
          <Technologies />
          <Tools />
          <Hobbies />
        </Box>
      </main>
    </>
  );
}
