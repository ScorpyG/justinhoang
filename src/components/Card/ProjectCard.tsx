import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import styles from './card.module.scss';

export interface ProjectCardProps {
  project: ProjectCardData;
  handleClick?: () => void;
}

export type ProjectCardData = {
  title: string;
  image: string;
  technologies: Array<string>;
  desc: string;
  repoLink: string;
  siteLink: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <Box className={`${styles.projectCard}`}>
      <Tilt>
        <Link href={project.siteLink} target="_blank">
          <Image src={project.image} height={270} width={420} alt="Project GIF" />
        </Link>
      </Tilt>

      <div className={`${styles.projectInfo}`}>
        <Link href={project.repoLink} target="_blank" color="blue.400" _hover={{ color: 'blue.500' }}>
          <h2>{project.title}</h2>
        </Link>

        <h3>{project.technologies.join(' | ').toString()}</h3>
        <p>{project.desc}</p>
      </div>
    </Box>
  );
}
