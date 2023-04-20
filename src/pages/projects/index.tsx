import Card from '@/components/Card';
import { projectList } from '@/utilities/constants/cardData';
import { Box, Heading, Text, chakra } from '@chakra-ui/react';
import Head from 'next/head';
import styles from './projects.module.scss';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
      </Head>
      <main>
        <Box className={`${styles.container}`}>
          <Box textAlign={'center'}>
            <Heading>Projects</Heading>
            <chakra.hr color={'black'} />
            <Text mt={2}>Things I&apos;ve built</Text>
          </Box>
          <Box className={`${styles.showcase}`}>
            {projectList.length > 0 ? (
              projectList.map((project, index) => <Card type="ProjectCard" project={project} key={index} />)
            ) : (
              <Heading>Sorry! No Projects Available</Heading>
            )}
          </Box>
        </Box>
      </main>
    </>
  );
}
