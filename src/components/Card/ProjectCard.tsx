'use client';
import { ProjectCardData } from '@/utilities/types';
import { Link } from '@chakra-ui/next-js';
import Tilt from 'react-parallax-tilt';
import styles from './card.module.scss';

export interface ProjectCardProps {
  project: ProjectCardData;
  handleClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className={`${styles.projectCard}`}>
      <Tilt>
        <Link href={project.siteLink} target="_blank">
          <img src={project.image} alt="Project GIF" />
        </Link>
      </Tilt>

      <div className={`${styles.projectInfo}`}>
        <Link href={project.repoLink} target="_blank" color="blue.400" _hover={{ color: 'blue.500' }}>
          <h2>{project.title}</h2>
        </Link>

        <h3>{project.technologies.join(' | ').toString()}</h3>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
††