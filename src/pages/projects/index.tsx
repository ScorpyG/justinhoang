import Card from '@/components/Card';
import { projectList } from '@/utilities/constants/cardData';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
      </Head>
      <main>
        <Box>
          <Box textAlign={'center'}>
            <Heading>Projects</Heading>

            <Text mt={2}>Things I&apos;ve built</Text>
          </Box>
          <Flex
            direction={'column'}
            gap={10}
            maxW={'1200px'}
            margin={'auto'}
            marginTop={'8'}
            marginBottom={'8'}
            padding={['0 20px', '0 15px', '0 15px', '0 10px']}
          >
            {projectList.length > 0 ? (
              projectList?.map((project, index) => <Card type="ProjectCard" project={project} key={index} />)
            ) : (
              <Heading>Sorry! No Projects Available</Heading>
            )}
          </Flex>
        </Box>
      </main>
    </>
  );
}
