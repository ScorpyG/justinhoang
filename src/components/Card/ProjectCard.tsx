import { LinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Box, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export interface ProjectCardProps {
  project: ProjectCardData;
  handleClick?: () => void;
}

export interface ProjectCardData {
  title: string;
  image: string;
  technologies: Array<string>;
  desc: string;
  repoLink: string;
  siteLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant={'outline'}
      backgroundColor={'transparent'}
      padding={'4'}
      border={'2px'}
    >
      <Tilt>
        <Box w={[350, 480]} h={[197, 270]}>
          <Link href={project.siteLink} target="_blank">
            <Image src={project.image} priority={true} alt="Project GIF" fill style={{ objectFit: 'contain' }} />
          </Link>
        </Box>
      </Tilt>

      <Stack>
        <CardBody>
          <Link href={project.repoLink} target="_blank" color="blue.400" _hover={{ color: 'blue.200' }}>
            <Heading size={'lg'}>
              {project.title} <LinkIcon boxSize={'6'} />
            </Heading>
          </Link>

          <Heading py={'2'} size={'md'}>
            {project.technologies.join(' | ').toString()}
          </Heading>
          <Text py={'2'}>{project.desc}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
