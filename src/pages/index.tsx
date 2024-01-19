import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  // ! TypeWriter component constantly re-renders the client side therefore lazy loading is needed to function properly
  const DynamicTypeWriter = dynamic(() => import('typewriter-effect'), {
    ssr: false,
  });
  const colorStateForDarkMode = useColorModeValue('#2E2E2E', '#FFF');
  const colorStateForLightMode = useColorModeValue('#FFF', '#2E2E2E');

  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <main>
        <Box className={styles.hero}>
          <Box className={styles.bio}>
            <Heading>Hi, I&apos;m</Heading>
            <Heading my={'3'}>Justin Hoang</Heading>
            <p>
              I&apos;m a software developer based in Vancouver with a passion for technology from planning, design,
              write codes and all the way to solve real-life problems. Be able to create and learn along side an
              innovative team is something I always love.
            </p>
            <Flex gap={'5px'} margin={'10px 0'}>
              Current working with
              {
                <DynamicTypeWriter
                  options={{
                    cursor: '<',
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    strings: ['TypeScript', 'React.js', 'Next.js', 'GraphQL', 'MongoDB', 'ChakraUI', 'SASS'],
                  }}
                />
              }
            </Flex>
            <br />
            <Link
              href="/about"
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
              aria-label="Direct to about page"
            >
              &gt;&gt; ABOUT ME
            </Link>
          </Box>
          <Box className={styles.model}></Box>
        </Box>
      </main>
    </>
  );
}
